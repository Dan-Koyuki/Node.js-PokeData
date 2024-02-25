"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BagCategory = exports.PokeBallFlag = exports.PokemonCategory = exports.EggGroup = exports.PokemonType = exports.Flavor = exports.Stat = void 0;
var Stat;
(function (Stat) {
    Stat["ATK"] = "atk";
    Stat["DEF"] = "def";
    Stat["SPA"] = "spa";
    Stat["SPD"] = "spd";
    Stat["SPEED"] = "speed";
    Stat["ACC"] = "accuracy";
    Stat["CRIT"] = "critical";
    Stat["NONE"] = "none";
})(Stat || (exports.Stat = Stat = {}));
var Flavor;
(function (Flavor) {
    Flavor["SPICY"] = "spicy";
    Flavor["DRY"] = "dry";
    Flavor["BITTER"] = "bitter";
    Flavor["SOUR"] = "sour";
    Flavor["SWEET"] = "sweet";
    Flavor["NONE"] = "none";
})(Flavor || (exports.Flavor = Flavor = {}));
var PokemonType;
(function (PokemonType) {
    PokemonType["NORMAL"] = "Normal";
    PokemonType["GHOST"] = "Ghost";
    PokemonType["ROCK"] = "Rock";
    PokemonType["STEEL"] = "Steel";
    PokemonType["FIRE"] = "Fire";
    PokemonType["WATER"] = "Water";
    PokemonType["GRASS"] = "Grass";
    PokemonType["ELECTRIC"] = "Electric";
    PokemonType["ICE"] = "Ice";
    PokemonType["GROUND"] = "Ground";
    PokemonType["FLYING"] = "Flying";
    PokemonType["FIGHTING"] = "Fighting";
    PokemonType["FAIRY"] = "Fairy";
    PokemonType["DRAGON"] = "Dragon";
    PokemonType["BUG"] = "Bug";
    PokemonType["DARK"] = "Dark";
    PokemonType["PSYCHIC"] = "Psychic";
    PokemonType["POISON"] = "Poison";
    PokemonType["UNKNOWN"] = "???";
})(PokemonType || (exports.PokemonType = PokemonType = {}));
var EggGroup;
(function (EggGroup) {
    EggGroup["MONSTER"] = "Monster";
    EggGroup["HUMANLIKE"] = "Human-Like";
    EggGroup["WATER1"] = "Water 1";
    EggGroup["WATER2"] = "Water 2";
    EggGroup["WATER3"] = "Water 3";
    EggGroup["BUG"] = "Bug";
    EggGroup["MINERAL"] = "Mineral";
    EggGroup["FLYING"] = "Flying";
    EggGroup["AMORPHOUS"] = "Amorphous";
    EggGroup["FIELD"] = "Field";
    EggGroup["FAIRY"] = "Fairy";
    EggGroup["DITTO"] = "Ditto";
    EggGroup["GRASS"] = "Grass";
    EggGroup["DRAGON"] = "Dragon";
    EggGroup["UNDISCOVERED"] = "No Eggs Discovered";
    EggGroup["UNKNOWN"] = "Gender Unknown";
})(EggGroup || (exports.EggGroup = EggGroup = {}));
var PokemonCategory;
(function (PokemonCategory) {
    PokemonCategory["LEGEND"] = "Legendary";
    PokemonCategory["MYTH"] = "Mythical";
    PokemonCategory["PSEUDO"] = "Pseudo Legendary";
})(PokemonCategory || (exports.PokemonCategory = PokemonCategory = {}));
var PokeBallFlag;
(function (PokeBallFlag) {
    PokeBallFlag["UB"] = "ULTRA BEAST";
    PokeBallFlag["SAFARI"] = "SAFARI";
    PokeBallFlag["PALPARK"] = "PAL PARK";
    PokeBallFlag["FISHING"] = "FISHING";
    PokeBallFlag["DIVING"] = "DIVING";
    PokeBallFlag["NIGHT"] = "NIGHT";
    PokeBallFlag["CAVE"] = "CAVE";
    PokeBallFlag["SPEED"] = "SPEED";
    PokeBallFlag["LEVEL1"] = "LEVEL 1";
    PokeBallFlag["LEVEL2"] = "LEVEL 2";
    PokeBallFlag["LEVEL3"] = "LEVEL 3";
    PokeBallFlag["LEVEL4"] = "LEVEL 4";
    PokeBallFlag["WEIGHT1"] = "WEIGHT 1";
    PokeBallFlag["WEIGHT2"] = "WEIGHT 2";
    PokeBallFlag["WEIGHT3"] = "WEIGHT 3";
    PokeBallFlag["WEIGHT4"] = "WEIGHT 4";
    PokeBallFlag["SPECIES"] = "SPECIES";
    PokeBallFlag["MOONEVO"] = "MOON EVO";
    PokeBallFlag["BUG"] = "BUG";
    PokeBallFlag["WATER"] = "WATER";
    PokeBallFlag["POKEDEX"] = "POKEDEX";
    PokeBallFlag["TURN"] = "TURN";
    PokeBallFlag["SLEEP"] = "SLEEP";
    PokeBallFlag["BOOSTED"] = "BOOSTED";
    PokeBallFlag["ORIGIN"] = "ORIGIN";
})(PokeBallFlag || (exports.PokeBallFlag = PokeBallFlag = {}));
var BagCategory;
(function (BagCategory) {
    BagCategory["BALLS"] = "POKEBALL";
    BagCategory["BERRIES"] = "BERRY";
    BagCategory["MACHINES"] = "MACHINE";
    BagCategory["BATTLEITEM"] = "BATTLE ITEM";
})(BagCategory || (exports.BagCategory = BagCategory = {}));
