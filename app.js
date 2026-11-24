// Bin Guide — matcher. Pure logic, no network, no keys.
// Works in the browser (script tag) and in Node (for tests).

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(function (w) {
      // naive singular: bottles -> bottle, boxes -> box, batteries -> battery
      if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
      if (w.length > 3 && w.endsWith("es") && !w.endsWith("ss")) return w.slice(0, -2);
      if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
      return w;
    })
    .join(" ");
}

function wordSet(text) {
  return new Set(normalize(text).split(" ").filter(Boolean));
}

// Score one item against the query. Exact name match wins big, keyword
// phrases next, single shared words last.
function scoreItem(item, query) {
  var q = " " + normalize(query) + " ";
  var score = 0;
  var name = normalize(item.name);
  if (q.indexOf(" " + name + " ") !== -1) score += 10;
  item.keywords.forEach(function (kw) {
    var k = normalize(kw);
    if (q.indexOf(" " + k + " ") !== -1) score += 5;
  });
  // single-word overlap as a weak fallback
  var qw = wordSet(query);
  var iw = wordSet(item.name + " " + item.keywords.join(" "));
  iw.forEach(function (w) {
    if (qw.has(w) && w.length > 2) score += 1;
  });
  return score;
}

// Returns { item, score, suggestions } — item is null when nothing matches.
function findBin(query, items) {
  var q = (query || "").trim();
  if (!q) return { item: null, score: 0, suggestions: [] };
  var ranked = items
    .map(function (item) { return { item: item, score: scoreItem(item, q) }; })
    .filter(function (r) { return r.score > 0; })
    .sort(function (a, b) { return b.score - a.score; });
  if (ranked.length === 0 || ranked[0].score < 3) {
    // No confident match: offer the closest names by word overlap.
    var qw = wordSet(q);
    var near = items
      .map(function (item) {
        var iw = wordSet(item.name);
        var overlap = 0;
        iw.forEach(function (w) { if (qw.has(w)) overlap += 1; });
        return { item: item, overlap: overlap };
      })
      .filter(function (r) { return r.overlap > 0; })
      .sort(function (a, b) { return b.overlap - a.overlap; })
      .slice(0, 3)
      .map(function (r) { return r.item; });
    return { item: null, score: 0, suggestions: near };
  }
  return { item: ranked[0].item, score: ranked[0].score, suggestions: [] };
}

if (typeof module !== "undefined") {
  module.exports = { normalize: normalize, findBin: findBin, scoreItem: scoreItem };
}
