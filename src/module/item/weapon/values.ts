import type { WeaponGroup, WeaponTrait } from "./types.ts";

const WEAPON_CATEGORIES = ["unarmed", "simple", "martial", "advanced"] as const;

const WEAPON_GROUPS = new Set([
    "axe",
    "bomb",
    "bow",
    "brawling",
    "club",
    "crossbow",
    "dart",
    "firearm",
    "flail",
    "hammer",
    "knife",
    "pick",
    "polearm",
    "shield",
    "sling",
    "spear",
    "sword",
] as const);

const MELEE_OR_RANGED_GROUPS = new Set(["brawling", "dart", "knife"] as const);
const MELEE_WEAPON_GROUPS = new Set([
    ...MELEE_OR_RANGED_GROUPS,
    "axe",
    "club",
    "flail",
    "hammer",
    "pick",
    "polearm",
    "shield",
    "spear",
    "sword",
] as const satisfies WeaponGroup[]);

/** Groups that will be forced as ranged weapons */
const MANDATORY_RANGED_GROUPS: Set<WeaponGroup> = new Set(["bomb", "bow", "crossbow", "firearm", "sling"]);

const WEAPON_PROPERTY_RUNE_TYPES = new Set([
    "ancestralEchoing",
    "anchoring",
    "ashen",
    "astral",
    "authorized",
    "bane",
    "bloodbane",
    "bloodthirsty",
    "brilliant",
    "called",
    "coating",
    "conducting",
    "corrosive",
    "crushing",
    "cunning",
    "dancing",
    "deathdrinking",
    "decaying",
    "demolishing",
    "disrupting",
    "earthbinding",
    "energizing",
    "extending",
    "fanged",
    "fearsome",
    "flaming",
    "flickering",
    "flurrying",
    "frost",
    "ghostTouch",
    "giantKilling",
    "greaterGiantKilling",
    "greaterAnchoring",
    "greaterAshen",
    "greaterAstral",
    "greaterBloodbane",
    "greaterBrilliant",
    "greaterCorrosive",
    "greaterCrushing",
    "greaterDecaying",
    "greaterDisrupting",
    "greaterExtending",
    "greaterFanged",
    "greaterFearsome",
    "greaterFlaming",
    "greaterFrost",
    "greaterHauling",
    "greaterImpactful",
    "greaterRooting",
    "greaterShock",
    "greaterThundering",
    "grievous",
    "hauling",
    "holy",
    "hopeful",
    "hooked",
    "impactful",
    "impossible",
    "keen",
    "kinWarding",
    "majorFanged",
    "majorRooting",
    "merciful",
    "nightmare",
    "pacifying",
    "returning",
    "rooting",
    "serrating",
    "shifting",
    "shock",
    "speed",
    "spellStoring",
    "swarming",
    "thundering",
    "trueRooting",
    "underwater",
    "unholy",
    "vorpal",
    "wounding",
] as const);

const THROWN_RANGES = new Set([10, 15, 20, 30, 40, 60, 80, 100] as const);
const WEAPON_RANGES = new Set([...THROWN_RANGES, 50, 70, 90, 110, 120, 140, 150, 180, 200, 240, 300] as const);

const RANGED_ONLY_TRAITS: Set<WeaponTrait> = new Set([
    "brutal",
    "cobbled",
    "combination",
    "double-barrel",
    "fatal-aim-d10",
    "fatal-aim-d12",
    "kickback",
    "propulsive",
    "scatter-5",
    "scatter-10",
    "scatter-15",
    "scatter-20",
    "splash",
    "ranged-trip",
    "repeating",
    "thrown",
]);

const MELEE_ONLY_TRAITS: Set<WeaponTrait> = new Set([
    "brace",
    "disarm",
    "finesse",
    "grapple",
    "reach",
    "shove",
    "trip",
]);

export {
    MANDATORY_RANGED_GROUPS,
    MELEE_ONLY_TRAITS,
    MELEE_WEAPON_GROUPS,
    RANGED_ONLY_TRAITS,
    THROWN_RANGES,
    WEAPON_CATEGORIES,
    WEAPON_GROUPS,
    WEAPON_PROPERTY_RUNE_TYPES,
    WEAPON_RANGES,
};
