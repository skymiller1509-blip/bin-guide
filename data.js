// Bin Guide — rules dataset.
//
// Bins: recycling, compost, general, hazardous.
// Every rule is a common, widely-agreed household rule. Bin colours and
// exact rules vary by council, so the app always says "check your council"
// next to the answer. Nothing here is a paid service or a live API call:
// this file IS the guide.
//
// Each item: name, keywords (phrases people type), bin, reason (plain
// language), tip (one extra practical line, optional).

const BINS = {
  recycling: {
    label: "Recycling",
    colour: "#1565c0",
    short: "Clean it, empty it, put it in the recycling bin."
  },
  compost: {
    label: "Compost",
    colour: "#2e7d32",
    short: "It rots down into soil. Never in the recycling bin."
  },
  general: {
    label: "General waste",
    colour: "#616161",
    short: "It cannot be recycled or composted. Bag it and bin it."
  },
  hazardous: {
    label: "Hazardous — do not bin it",
    colour: "#c62828",
    short: "Take it to a drop-off point. Never put it in any home bin."
  }
};

const ITEMS = [
  // ---- Recycling ----
  { name: "Plastic bottle", keywords: ["plastic bottle", "water bottle", "drinks bottle", "soda bottle", "pop bottle", "fizzy drink bottle"], bin: "recycling", reason: "Empty plastic bottles melt down and become new bottles. Rinse it and put the cap back on.", tip: "Squash it flat so the bin fits more." },
  { name: "Glass jar", keywords: ["glass jar", "jam jar", "sauce jar", "pickle jar"], bin: "recycling", reason: "Glass melts down and becomes new glass, again and again, with no loss of quality.", tip: "Rinse out food. The lid goes in too if it is metal." },
  { name: "Glass bottle", keywords: ["glass bottle", "wine bottle", "beer bottle"], bin: "recycling", reason: "Glass melts down and becomes new glass, again and again.", tip: "Rinse it. No need to remove the label." },
  { name: "Tin can", keywords: ["tin can", "tin", "soup can", "beans can", "food can"], bin: "recycling", reason: "Metal melts down and becomes new metal. A recycled can can be back on the shelf in weeks.", tip: "Rinse it so it does not smell." },
  { name: "Aluminium can", keywords: ["aluminium can", "aluminum can", "drinks can", "soda can", "beer can", "coke can"], bin: "recycling", reason: "Aluminium melts down and becomes new cans. It is one of the easiest things to recycle.", tip: "Empty it first." },
  { name: "Cardboard box", keywords: ["cardboard box", "cardboard", "delivery box", "packing box"], bin: "recycling", reason: "Clean cardboard is pulped and made into new boxes.", tip: "Flatten it, and keep it dry. Greasy cardboard is compost, not recycling." },
  { name: "Newspaper", keywords: ["newspaper", "news paper"], bin: "recycling", reason: "Paper is pulped and made into new paper.", tip: "Keep it dry." },
  { name: "Magazine", keywords: ["magazine"], bin: "recycling", reason: "Glossy paper is still paper. It gets pulped like the rest.", tip: "Remove any plastic wrap first." },
  { name: "Office paper", keywords: ["office paper", "printer paper", "paper", "envelope", "letter", "notebook paper"], bin: "recycling", reason: "Paper is pulped and made into new paper.", tip: "Shredded paper is fine in most areas, but check your council." },
  { name: "Cereal box", keywords: ["cereal box", "cereal carton"], bin: "recycling", reason: "Thin card is pulped and made into new card.", tip: "Flatten it. Take the plastic bag inside out first, that bag is general waste." },
  { name: "Milk jug", keywords: ["milk jug", "milk bottle", "plastic milk bottle"], bin: "recycling", reason: "Empty plastic jugs melt down and become new plastic.", tip: "Rinse it." },
  { name: "Detergent bottle", keywords: ["detergent bottle", "washing up liquid bottle", "soap bottle", "cleaning bottle", "bleach bottle"], bin: "recycling", reason: "Empty plastic cleaning bottles melt down and become new plastic.", tip: "Rinse it out first, and only when it is empty." },
  { name: "Shampoo bottle", keywords: ["shampoo bottle", "shower gel bottle", "conditioner bottle"], bin: "recycling", reason: "Empty plastic bottles melt down and become new plastic.", tip: "Rinse it. The pump usually has a metal spring, so check your council." },
  { name: "Yogurt pot", keywords: ["yogurt pot", "yoghurt pot", "plastic tub", "butter tub", "margarine tub"], bin: "recycling", reason: "Clean plastic tubs melt down and become new plastic.", tip: "Rinse it. The foil lid goes in the recycling only if it is clean and scrunched." },
  { name: "Tin foil", keywords: ["tin foil", "aluminium foil", "aluminum foil", "foil"], bin: "recycling", reason: "Clean foil melts down and becomes new metal.", tip: "Scrunch it into a ball first, and only if it is clean. Dirty foil is general waste." },
  { name: "Egg box", keywords: ["egg box", "egg carton"], bin: "recycling", reason: "Cardboard egg boxes are pulped and made into new card.", tip: "Only the cardboard kind. Foam egg boxes are general waste." },
  { name: "Juice carton", keywords: ["juice carton", "milk carton", "tetra pak", "carton"], bin: "recycling", reason: "Cartons are paper lined with plastic. Many areas recycle them, some do not.", tip: "Check your council takes cartons before you bin it." },
  { name: "Metal lid", keywords: ["metal lid", "jar lid", "bottle cap", "metal cap"], bin: "recycling", reason: "Small metal lids melt down with other metal.", tip: "Put the lid back on the jar or bottle so it does not get lost in sorting." },
  { name: "Aerosol can", keywords: ["aerosol can", "spray can", "deodorant can"], bin: "recycling", reason: "An empty metal spray can melts down and becomes new metal.", tip: "Only when it is fully empty. A can that still sprays is hazardous." },

  // ---- Compost ----
  { name: "Banana peel", keywords: ["banana peel", "banana skin"], bin: "compost", reason: "Peels rot down into soil. In landfill they make methane, a gas that warms the planet.", tip: "Chop big peels in half so they rot faster." },
  { name: "Apple core", keywords: ["apple core", "fruit peel", "orange peel", "fruit skin", "pear core"], bin: "compost", reason: "Fruit waste rots down into soil. In landfill it makes methane instead.", tip: "All fruit and veg scraps go here." },
  { name: "Vegetable peelings", keywords: ["vegetable peelings", "potato peel", "carrot peel", "onion skin", "veg scraps", "vegetable scraps"], bin: "compost", reason: "Veg scraps rot down into soil. In landfill they make methane instead.", tip: "No plastic bags in the compost bin." },
  { name: "Tea bag", keywords: ["tea bag", "teabag"], bin: "compost", reason: "Tea leaves rot down into soil. Most tea bags are now plastic-free.", tip: "If the bag feels plasticky, it is general waste. Loose tea always goes in compost." },
  { name: "Coffee grounds", keywords: ["coffee grounds", "coffee filter", "used coffee"], bin: "compost", reason: "Coffee grounds rot down and are good for soil.", tip: "The paper filter goes in too." },
  { name: "Eggshells", keywords: ["eggshells", "egg shells", "egg shell"], bin: "compost", reason: "Shells rot down slowly and add calcium to soil.", tip: "Crush them first so they break down faster." },
  { name: "Bread", keywords: ["bread", "stale bread", "toast"], bin: "compost", reason: "Bread rots down into soil. In landfill it makes methane instead.", tip: "Only small amounts. A whole loaf attracts rats in a home heap, use the council food bin." },
  { name: "Leftover food", keywords: ["leftover food", "leftovers", "cooked food", "food waste", "old food"], bin: "compost", reason: "Food rots down into soil. In landfill it makes methane, a gas that warms the planet.", tip: "Use your council food waste bin if you have one. Meat and fish go in the council bin, not a home heap." },
  { name: "Garden waste", keywords: ["garden waste", "grass clippings", "leaves", "prunings", "weeds", "plant cuttings"], bin: "compost", reason: "Leaves and cuttings rot down into soil.", tip: "Big branches go to the garden waste collection, not the small compost bin." },
  { name: "Greasy pizza box", keywords: ["greasy pizza box", "pizza box", "oily pizza box"], bin: "compost", reason: "Grease soaks into the card, and recyclers reject greasy card. Compost takes it.", tip: "If the box is clean, tear off the clean lid for recycling and compost the greasy part. No compost bin? Then general waste." },
  { name: "Dirty paper towel", keywords: ["dirty paper towel", "paper towel", "kitchen roll", "used napkin"], bin: "compost", reason: "Soiled paper rots down into soil. Recyclers reject it because it is dirty.", tip: "Clean paper towels are recycling. Only dirty ones go here." },
  { name: "Soiled cardboard", keywords: ["soiled cardboard", "greasy cardboard", "dirty cardboard"], bin: "compost", reason: "Grease and food soak in, so recyclers reject it. Compost takes it.", tip: "Clean cardboard is recycling. Only the dirty part goes here." },

  // ---- General waste ----
  { name: "Plastic bag", keywords: ["plastic bag", "carrier bag", "shopping bag", "polythene bag"], bin: "general", reason: "Thin bags jam the sorting machines at recycling plants, so they are not taken.", tip: "Many supermarkets have a bag collection point at the door. Reuse bags when you can." },
  { name: "Cling film", keywords: ["cling film", "plastic wrap", "clingfilm", "food wrap"], bin: "general", reason: "Thin film wraps around the sorting machines, so recyclers will not take it.", tip: "Use a tub with a lid instead of film where you can." },
  { name: "Crisp packet", keywords: ["crisp packet", "crisps packet", "chip bag", "snack packet", "chocolate wrapper", "sweet wrapper"], bin: "general", reason: "Crisp packets are plastic lined with foil. The two layers cannot be pulled apart, so they cannot be recycled.", tip: "Some shops run collection schemes for these. Otherwise it is general waste." },
  { name: "Coffee cup", keywords: ["coffee cup", "paper cup", "takeaway cup", "disposable cup"], bin: "general", reason: "Paper cups are lined with plastic so they do not leak. Recyclers cannot separate the two layers.", tip: "Carry a reusable cup. Some coffee shops collect their own cups for recycling." },
  { name: "Polystyrene", keywords: ["polystyrene", "styrofoam", "foam packaging", "foam box"], bin: "general", reason: "Foam is mostly air and too light to recycle. Plants will not take it.", tip: "Ask the shop to take the packaging back, or reuse it." },
  { name: "Broken glass", keywords: ["broken glass", "broken mirror", "shattered glass", "glass shard"], bin: "general", reason: "Broken glass is a different kind from bottles and jars, and it melts at a different heat. It would ruin a batch of recycled glass.", tip: "Wrap it in newspaper and label it SHARP so nobody gets cut." },
  { name: "Nappy", keywords: ["nappy", "diaper", "disposable nappy"], bin: "general", reason: "Nappies mix plastic, paper and waste. Nothing in them can be separated for recycling.", tip: "Bag them tightly. Reusable cloth nappies avoid the problem." },
  { name: "Wet wipes", keywords: ["wet wipes", "wet wipe", "baby wipes", "baby wipe", "makeup wipes"], bin: "general", reason: "Wipes are plastic fibres, not paper. They do not rot and they block drains.", tip: "Never flush them, even if the pack says flushable." },
  { name: "Toothpaste tube", keywords: ["toothpaste tube", "toothpaste"], bin: "general", reason: "Tubes mix plastic and metal foil, and they are hard to empty. Recyclers will not take them.", tip: "Squeeze out as much as you can before binning." },
  { name: "Chewing gum", keywords: ["chewing gum", "gum"], bin: "general", reason: "Gum is made of plastic-like rubber. It does not rot or recycle.", tip: "Wrap it in paper before binning so it does not stick to things." },
  { name: "Cigarette butt", keywords: ["cigarette butt", "cigarette", "cig butt", "fag end"], bin: "general", reason: "Butts are plastic fibres soaked in chemicals. They do not rot.", tip: "Make sure it is fully out before binning." },
  { name: "Rubber gloves", keywords: ["rubber gloves", "disposable gloves", "latex gloves"], bin: "general", reason: "Thin gloves jam sorting machines and cannot be recycled.", tip: "If they touched chemicals or blood, bag them separately." },
  { name: "Sanitary items", keywords: ["sanitary towel", "sanitary pad", "tampon", "sanitary items"], bin: "general", reason: "They mix plastic, cotton and waste. Nothing in them can be separated.", tip: "Never flush them. They block drains." },
  { name: "Pet waste", keywords: ["pet waste", "dog poo", "dog waste", "cat litter", "dog poo bag"], bin: "general", reason: "Animal waste can carry germs, so it must not go in compost or recycling.", tip: "Bag it and use the general bin. Never put it in a food waste bin." },
  { name: "Broken toy", keywords: ["broken toy", "old toy", "plastic toy"], bin: "general", reason: "Toys mix many plastics and often have batteries and glue inside. They cannot be recycled as one thing.", tip: "Take the batteries out first, batteries are hazardous. Working toys go to charity." },
  { name: "Worn-out shoes", keywords: ["worn-out shoes", "old shoes", "broken shoes"], bin: "general", reason: "Shoes mix leather, rubber, glue and fabric. They cannot be pulled apart for recycling.", tip: "Shoes in good shape go to a charity shop or a shoe bank." },
  { name: "Foam egg box", keywords: ["foam egg box", "foam egg carton", "polystyrene egg box"], bin: "general", reason: "Foam is too light to recycle, and plants will not take it.", tip: "Cardboard egg boxes are recycling. Only the foam kind goes here." },

  // ---- Hazardous ----
  { name: "Battery", keywords: ["battery", "batteries", "aa battery", "aaa battery", "phone battery", "watch battery", "button battery"], bin: "hazardous", reason: "Batteries can catch fire in bin trucks and at sorting plants. They must never go in any home bin.", tip: "Take them to a shop drop-off. Most supermarkets and electronics shops have a battery box by the door." },
  { name: "Energy-saving bulb", keywords: ["energy-saving bulb", "cfl bulb", "fluorescent bulb", "fluorescent tube", "light bulb"], bin: "hazardous", reason: "These bulbs contain a small amount of mercury, a poison. They must not go in any home bin.", tip: "Take them to a household waste centre or a shop drop-off. Old-style plain bulbs are general waste." },
  { name: "Paint tin", keywords: ["paint tin", "paint", "leftover paint", "paint can"], bin: "hazardous", reason: "Leftover paint is a chemical. It poisons soil and water if it goes in a bin.", tip: "Take it to a household waste centre. An empty, dry tin with the lid off can go in recycling in some areas." },
  { name: "Old phone", keywords: ["old phone", "mobile phone", "broken phone", "smartphone"], bin: "hazardous", reason: "Phones have a battery inside that can catch fire, plus metals worth recovering. They must not go in any home bin.", tip: "Take it to an electronics shop or a household waste centre. Many shops buy or recycle old phones." },
  { name: "Laptop", keywords: ["laptop", "old laptop", "tablet", "old tablet"], bin: "hazardous", reason: "Laptops have a battery inside that can catch fire, plus metals worth recovering. They must not go in any home bin.", tip: "Take it to an electronics shop or a household waste centre. Wipe your files first." },
  { name: "TV", keywords: ["tv", "television", "old tv", "monitor", "computer monitor"], bin: "hazardous", reason: "Screens contain glass, chemicals and metals that must be handled apart. They must not go in any home bin.", tip: "Take it to a household waste centre or book a bulky waste collection." },
  { name: "Medicine", keywords: ["medicine", "medicines", "old pills", "expired medicine", "tablets", "old tablets"], bin: "hazardous", reason: "Old medicine poisons water if it goes in a bin or down the drain.", tip: "Take it back to any pharmacy. They dispose of it safely, free." },
  { name: "Chemicals", keywords: ["chemicals", "bleach", "cleaning chemicals", "weed killer", "pesticide", "solvent"], bin: "hazardous", reason: "Chemicals poison soil and water, and some can react and catch fire in a bin truck.", tip: "Take them to a household waste centre in their original bottle with the label on." },
  { name: "Engine oil", keywords: ["engine oil", "motor oil", "used oil", "cooking oil"], bin: "hazardous", reason: "One litre of oil can poison a million litres of water. It must never go in a bin or down a drain.", tip: "Take it to a household waste centre or a garage. Small amounts of cooking oil go in the food waste bin in some areas." },
  { name: "Ink cartridge", keywords: ["ink cartridge", "printer cartridge", "toner cartridge"], bin: "hazardous", reason: "Cartridges hold ink and electronic parts. They must not go in a home bin.", tip: "Many shops take them back, and some pay for them." },
  { name: "Disposable vape", keywords: ["disposable vape", "vape", "e-cigarette", "e cigarette"], bin: "hazardous", reason: "Vapes have a battery inside that can catch fire in a bin truck. They must never go in any home bin.", tip: "Take it to a vape shop or an electronics drop-off. Many vape shops take them back free." }
];

if (typeof module !== "undefined") {
  module.exports = { BINS, ITEMS };
}
