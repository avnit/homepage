// Copy for the Voltgrave concept page (/voltgrave): a Halloween "dead power grid"
// Minecraft world. Kept as data so the boards stay presentational.

export const world = {
  eyebrow: "Minecraft Java · Halloween world concept",
  title: ["VOLT", "GRAVE"],
  lede: "A power grid that died on Halloween night and never stopped humming. Every tombstone is a transformer, every forest is made of vacuum tubes, and the lights still flicker on their own after dark.",
  twist:
    "The twist: nothing here is decoration only. Copper bulbs flicker on real redstone clocks, sculk sensors trigger the scares, and thunderstorms make actual charged creepers at the Tesla Cathedral. The world reacts to the player like a live circuit.",
  stats: [
    { value: "6", label: "districts on one shared grid" },
    { value: "1", label: "centerpiece build: the Tesla Cathedral" },
    { value: "0", label: "mods or plugins required" },
  ],
  server: ["Server: AMP · minecraft01 · 192.168.0.21:25565", "Build style: survival-friendly, vanilla blocks only"],
  map: {
    label: "World map · circuit layout",
    scale: "spawn at 0, 0 · 1 tile ≈ 256 blocks",
    centerpiece: { name: ["TESLA", "CATHEDRAL"], note: "spawn · storm altar" },
    legend: [
      { swatch: "copper", label: "copper rail lines (powered rail network)" },
      { swatch: "oxide", label: "oxidized main bus" },
    ],
  },
};

export const districts = [
  {
    id: "transformer-graveyard",
    index: "01",
    compass: "Northwest",
    difficulty: "Easy",
    name: "Transformer Graveyard",
    map: { x: 70, y: 70, name: ["Transformer", "Graveyard"], note: ["NW · humming tombstones"] },
    blurb:
      "Rows of burnt-out pole transformers stand in for tombstones. Each one hums, and each one has an epitaph for the voltage it used to carry.",
    blocks: [
      "iron block",
      "iron bars",
      "lightning rod",
      "polished blackstone",
      "chain",
      "soul lantern",
      "jack o'lantern",
    ],
    signature:
      'A 1×1×3 grave: blackstone base, iron block body, iron bar cooling fins, lightning rod on top. The sign reads "HERE LIES 13.8 kV. It gave too much."',
    haunt:
      "Tripwire under the path powers a note block with a zombie head on top, so the grave groans as you walk past.",
  },
  {
    id: "vacuum-tube-forest",
    index: "02",
    compass: "Northeast",
    difficulty: "Easy",
    name: "Vacuum Tube Forest",
    map: { x: 530, y: 70, name: ["Vacuum Tube", "Forest"], note: ["NE · glass trees,", "glowing filaments"] },
    blurb:
      "A forest where every tree is a giant radio valve. Some still glow orange, some are burnt black, and a few flicker as if something is warming them up.",
    blocks: ["glass pane", "tinted glass", "end rod", "shroomlight", "waxed cut copper", "copper bulb"],
    signature:
      "A 5×5 glass-pane cylinder, 12–20 tall, with a waxed cut copper cap and base. Inside, a column of end rods is the filament, and a shroomlight at the base gives the orange glow.",
    haunt:
      "Copper bulbs on observer clocks inside every third tube. Clocks of different lengths make the forest flicker out of sync.",
  },
  {
    id: "substation-swamp",
    index: "03",
    compass: "West",
    difficulty: "Medium",
    name: "Substation Swamp",
    map: { x: 30, y: 360, name: ["Substation", "Swamp"], note: ["W · pylons, witches, storms"] },
    blurb:
      "High-voltage pylons march through a swamp biome. The witch huts are the old control houses, and every storm lights the pylons up with real lightning.",
    blocks: ["iron bars", "andesite wall", "chain (horizontal)", "lightning rod", "mud bricks", "mangrove roots"],
    signature:
      "A 30-tall lattice pylon of iron bars and andesite walls with crossarms. Horizontal chains between pylons are the sagging lines, and a lightning rod sits on every peak.",
    haunt:
      "A lightning rod gives a redstone pulse when it's struck. Wire it to sticky pistons, so every strike throws open a crypt door in the swamp.",
  },
  {
    id: "circuit-badlands",
    index: "04",
    compass: "East",
    difficulty: "Medium",
    name: "Circuit Badlands",
    map: { x: 570, y: 360, name: ["Circuit", "Badlands"], note: ["E · a motherboard the", "size of a valley"] },
    blurb:
      'A badlands valley flattened into one enormous motherboard. You walk the traces between chips the size of houses, and the "bugs" are real.',
    blocks: ["green concrete", "waxed copper", "black concrete", "iron trapdoor", "redstone lamp", "banded terracotta"],
    signature:
      'A 24×24 black concrete "CPU" with iron trapdoor pins down every edge, copper block capacitors, and resistors made from stacked banded terracotta. The traces are 1-wide waxed copper paths.',
    haunt:
      'Inverted daylight detectors switch the LED lamps on at dusk. Cave spiders name-tagged "Bug" lurk under the chips.',
  },
  {
    id: "crt-crypt",
    index: "05",
    compass: "Southwest",
    difficulty: "Hard",
    name: "The CRT Crypt",
    map: { x: 70, y: 640, name: ["The CRT Crypt"], note: ["SW · underground,", "screens that watch"] },
    blurb:
      "An underground hall lined floor to ceiling with dead televisions. They stay dark until you move, and then they all turn on at once.",
    blocks: [
      "deepslate tiles",
      "tuff bricks",
      "green stained glass",
      "redstone lamp",
      "sculk sensor",
      "sculk shrieker",
    ],
    signature:
      "Each TV is a 4×3 tuff-brick frame with green stained glass in front of redstone lamps. Stack them 6 high along both walls.",
    haunt:
      "Sculk sensors under the floor light the screens when a player steps or jumps. A player-placed shrieker screams but can't summon the Warden.",
  },
  {
    id: "dead-server-room",
    index: "06",
    compass: "Southeast",
    difficulty: "Final dungeon",
    name: "Dead Server Room",
    final: true,
    map: { x: 530, y: 640, name: ["Dead Server", "Room"], note: ["SE · the final dungeon"] },
    blurb:
      "A data center that went dark at midnight on October 31. The status lights still blink, the hot aisle still burns, and the last backup is locked behind a door that only opens to the right byte.",
    blocks: ["iron block", "dispenser (drive bays)", "observer (vents)", "copper bulb", "packed ice", "magma block"],
    signature:
      'Rows of 2-wide, 5-tall racks. The cold aisle is packed ice, the hot aisle is magma block under carpet (burns if you sprint). A wither skeleton named "Kernel Panic" guards the far end.',
    haunt:
      'Eight levers are the bits of a byte. Enter 31 in binary (00011111) and the vault opens on "the last backup".',
  },
];

export const cathedral = {
  eyebrow: "Board 03 · Centerpiece at spawn",
  title: "The Tesla Cathedral",
  elevationLabel: "South elevation · not to scale",
  lede: "A gothic nave with a working Tesla coil for a spire. It's the spawn landmark you can see from every district, and on storm nights it farms charged creepers on its own.",
  stats: [
    { value: "41×25", label: "nave footprint" },
    { value: "~90", label: "blocks to the rod tip" },
    { value: "5", label: "coil rings, 4 oxidation stages" },
  ],
  materials: [
    { block: "deepslate bricks", role: "walls" },
    { block: "polished blackstone", role: "buttresses" },
    { block: "cut copper → oxidized", role: "coil rings" },
    { block: "copper grate", role: "spire core" },
    { block: "green stained glass", role: "windows" },
    { block: "soul lantern + chain", role: "nave lights" },
  ],
  materialsNote:
    "Wax only the top ring and the toroid (honeycomb on copper) so they stay bright. Leave the lower rings unwaxed and they'll oxidize over real play time, so the spire ages with the server.",
  ritual: [
    { text: "Lead creepers into the glass-roofed pen directly under the rod." },
    {
      text: "When a thunderstorm rolls in, the rod draws the strikes and any creeper close to the strike becomes ",
      strong: "charged",
      tail: ".",
    },
    {
      text: "A charged creeper's blast makes zombies, skeletons and other creepers drop their ",
      strong: "heads",
      tail: ".",
    },
    { text: "Those heads go on note blocks across the world. That's how the graveyard groans and the crypt screams." },
  ],
  ritualNote: "No storm coming? A trident with Channeling summons lightning onto a mob during any thunderstorm.",
  annotations: [
    { x1: 432, x2: 502, y: 166, tx: 508, ty: 156, lines: ["Lightning rod. Pulls nearby", "strikes in a storm"] },
    { x1: 432, x2: 502, y: 216, tx: 508, ty: 206, lines: ["Toroid: 9×9 ring of cut", "copper"] },
    {
      x1: 418,
      x2: 502,
      y: 360,
      tx: 508,
      ty: 344,
      lines: ["Coil rings, fresh copper at", "the top grading to oxidized", "at the base"],
    },
    { x1: 40, x2: 148, y: 646, tx: 20, ty: 560, lines: ["Lancet windows:", "green stained", "glass over lamps"] },
    {
      x1: 474,
      x2: 504,
      y: 876,
      tx: 510,
      ty: 862,
      accent: true,
      lines: ["Storm pen: creepers held", "under the spire"],
    },
  ],
};

export const mechanics = {
  eyebrow: "Board 04",
  title: "Redstone Haunts",
  intro:
    "Six circuits power every scare in the world. All of them are vanilla and survival-craftable, and each reads left to right: input to output.",
  circuits: [
    {
      name: "Flicker",
      wiring: "repeater loop → copper bulb",
      body: "A copper bulb toggles on each pulse instead of following power. Feed it a slow repeater loop and it blinks like a dying light. Mix loop lengths so the bulbs never sync.",
    },
    {
      name: "Groaning grave",
      wiring: "tripwire → note block + mob head",
      body: "A mob head placed on a note block makes it play that mob's sound. A zombie head groans, a wither skeleton head rattles. Hide the string in the path.",
    },
    {
      name: "Screens wake",
      wiring: "sculk sensor → redstone lamps",
      body: "Sensors under the crypt floor pick up footsteps and jumps and light every TV. Sneaking players aren't detected, so careful players can slip through in the dark.",
    },
    {
      name: "Strike trigger",
      wiring: "lightning rod → sticky pistons",
      body: "A lightning rod puts out a full-strength pulse when struck. Wire it to the swamp crypt doors, and the dead open their own graves during storms.",
    },
    {
      name: "Dusk LEDs",
      wiring: "inverted daylight detector → lamp",
      body: "Right-click a daylight detector to invert it. The motherboard's lamps light up at sunset and go dark at dawn, with no clock to maintain.",
    },
    {
      name: "Byte lock",
      wiring: "8 levers → AND gate → iron door",
      body: "The bits that must be ON feed the AND gate directly; the bits that must be OFF pass through a redstone torch first. The code is 00011111, which is 31.",
      final: true,
    },
  ],
  nightMode: {
    title: "Halloween night mode · AMP console",
    commands: [
      "gamerule doDaylightCycle false",
      "time set 18000",
      "gamerule doWeatherCycle false",
      "weather thunder",
      "whitelist on",
    ],
    note: "Locks the world at midnight in a permanent thunderstorm, which keeps the cathedral's storm ritual running. To restore normal days after Halloween, set both gamerules back to true.",
  },
  buildOrder: {
    title: "Build order",
    steps: [
      "Tesla Cathedral at spawn, then start farming heads in storms",
      "Powered rail network out to all six districts",
      "Graveyard and Tube Forest (the easy, decorative districts)",
      "Swamp and Circuit Badlands (lightning and dusk circuits)",
      "CRT Crypt underground",
      "Dead Server Room and the byte-lock vault last",
    ],
  },
};

export const zones = {
  eyebrow: "Board 02",
  title: "The Six Districts",
  intro:
    "Each district is one component of a dead machine. Build them in order of distance from spawn so difficulty climbs as players move outward.",
};
