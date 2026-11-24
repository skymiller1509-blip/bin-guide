// Bin Guide tests — run: node tests/test.js
// No network, no server needed. Exits non-zero on any failure.
const { BINS, ITEMS } = require("../data.js");
const { findBin } = require("../app.js");

let pass = 0, fail = 0;
function check(label, actual, expected) {
  if (actual === expected) { pass++; console.log("PASS  " + label); }
  else { fail++; console.log("FAIL  " + label + " — got '" + actual + "', expected '" + expected + "'"); }
}
function binOf(query) {
  const r = findBin(query, ITEMS);
  return r.item ? r.item.bin : null;
}
function nameOf(query) {
  const r = findBin(query, ITEMS);
  return r.item ? r.item.name : null;
}

// --- Required items (task brief) ---
check("plastic bottle -> recycling", binOf("plastic bottle"), "recycling");
check("banana peel -> compost", binOf("banana peel"), "compost");
check("battery -> hazardous", binOf("battery"), "hazardous");
check("glass jar -> recycling", binOf("glass jar"), "recycling");
check("pizza box -> compost", binOf("pizza box"), "compost");

// --- Natural phrasing variants ---
check("empty water bottle -> recycling", binOf("empty water bottle"), "recycling");
check("a banana skin -> compost", binOf("a banana skin"), "compost");
check("AA battery -> hazardous", binOf("AA battery"), "hazardous");
check("jam jar -> recycling", binOf("jam jar"), "recycling");
check("greasy pizza box -> compost", binOf("greasy pizza box"), "compost");
check("old phone -> hazardous", binOf("old phone"), "hazardous");
check("coffee cup -> general", binOf("coffee cup"), "general");
check("plastic bag -> general", binOf("plastic bag"), "general");
check("tin can -> recycling", binOf("tin can"), "recycling");
check("leftover food -> compost", binOf("leftover food"), "compost");
check("crisp packet -> general", binOf("crisp packet"), "general");
check("old medicine -> hazardous", binOf("old medicine"), "hazardous");
check("newspaper -> recycling", binOf("newspaper"), "recycling");
check("tea bag -> compost", binOf("tea bag"), "compost");
check("broken glass -> general", binOf("broken glass"), "general");
check("disposable vape -> hazardous", binOf("disposable vape"), "hazardous");

// --- Unknown handling ---
const unknown = findBin("quantum flux capacitor", ITEMS);
check("unknown item returns no match", unknown.item, null);
check("empty query returns no match", findBin("", ITEMS).item, null);

// --- Dataset sanity ---
const validBins = new Set(Object.keys(BINS));
let bad = 0;
const names = new Set();
ITEMS.forEach(function (it) {
  if (!validBins.has(it.bin)) { bad++; console.log("FAIL  bad bin: " + it.name); }
  if (!it.reason || it.reason.length < 20) { bad++; console.log("FAIL  short/missing reason: " + it.name); }
  if (!it.keywords || it.keywords.length === 0) { bad++; console.log("FAIL  no keywords: " + it.name); }
  if (names.has(it.name)) { bad++; console.log("FAIL  duplicate name: " + it.name); }
  names.add(it.name);
});
check("dataset: all items valid (" + ITEMS.length + " items)", bad, 0);
const counts = {};
ITEMS.forEach(function (it) { counts[it.bin] = (counts[it.bin] || 0) + 1; });
console.log("      bins: " + JSON.stringify(counts));
check("dataset: every bin has items", Object.keys(counts).length, 4);

console.log("\n" + pass + " passed, " + fail + " failed.");
process.exit(fail ? 1 : 0);
