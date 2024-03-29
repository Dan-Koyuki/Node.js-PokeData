"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMaterialByName = exports.getAllMaterial = exports.getAllBattleItem = exports.findBattleItemByName = exports.getAllPokeBall = exports.findPokeBallByName = exports.getTMsPerPage = exports.getCustomTMsPerPage = exports.getAllMachine = exports.findMachineByRecipe = exports.findMachineByMoves = exports.findMachineByPrice = exports.findMachineByID = exports.getAllTypes = exports.findTypeByName = exports.getAllNature = exports.findNatureByDisliking = exports.findNatureByLiking = exports.findNatureByDecreaseStat = exports.findNatureByIncreaseStat = exports.findNatureByName = exports.sortPokemonByName = exports.sortPokemonByWeight = exports.sortPokemonByHeight = exports.getCustomPokemonPerPage = exports.getThirtyPokemon = exports.getAllPokemon = exports.findPokemonByTypes = exports.findPokemonByType = exports.findPokemonByRegion = exports.findPokemonByNormalAbility = exports.findPokemonByName = exports.findPokemonByHiddenAbility = exports.findPokemonByGenderRatio = exports.findPokemonByEggGroup = exports.findPokemonByCategory = exports.findPokemonByBaseStat = exports.findPokemonByAbility = exports.findPokemonById = exports.BagCategory = exports.PokeBallFlag = exports.EggGroup = exports.PokemonType = exports.Flavor = exports.Stat = void 0;
var helper_enum_1 = require("./models/helper.enum");
Object.defineProperty(exports, "Stat", { enumerable: true, get: function () { return helper_enum_1.Stat; } });
Object.defineProperty(exports, "Flavor", { enumerable: true, get: function () { return helper_enum_1.Flavor; } });
Object.defineProperty(exports, "PokemonType", { enumerable: true, get: function () { return helper_enum_1.PokemonType; } });
Object.defineProperty(exports, "EggGroup", { enumerable: true, get: function () { return helper_enum_1.EggGroup; } });
Object.defineProperty(exports, "PokeBallFlag", { enumerable: true, get: function () { return helper_enum_1.PokeBallFlag; } });
Object.defineProperty(exports, "BagCategory", { enumerable: true, get: function () { return helper_enum_1.BagCategory; } });
var pokemon_core_1 = require("./core/pokemon.core");
Object.defineProperty(exports, "findPokemonById", { enumerable: true, get: function () { return pokemon_core_1.findPokemonById; } });
Object.defineProperty(exports, "findPokemonByAbility", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByAbility; } });
Object.defineProperty(exports, "findPokemonByBaseStat", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByBaseStat; } });
Object.defineProperty(exports, "findPokemonByCategory", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByCategory; } });
Object.defineProperty(exports, "findPokemonByEggGroup", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByEggGroup; } });
Object.defineProperty(exports, "findPokemonByGenderRatio", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByGenderRatio; } });
Object.defineProperty(exports, "findPokemonByHiddenAbility", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByHiddenAbility; } });
Object.defineProperty(exports, "findPokemonByName", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByName; } });
Object.defineProperty(exports, "findPokemonByNormalAbility", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByNormalAbility; } });
Object.defineProperty(exports, "findPokemonByRegion", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByRegion; } });
Object.defineProperty(exports, "findPokemonByType", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByType; } });
Object.defineProperty(exports, "findPokemonByTypes", { enumerable: true, get: function () { return pokemon_core_1.findPokemonByTypes; } });
Object.defineProperty(exports, "getAllPokemon", { enumerable: true, get: function () { return pokemon_core_1.getAllPokemon; } });
Object.defineProperty(exports, "getThirtyPokemon", { enumerable: true, get: function () { return pokemon_core_1.getThirtyPokemon; } });
Object.defineProperty(exports, "getCustomPokemonPerPage", { enumerable: true, get: function () { return pokemon_core_1.getCustomPokemonPerPage; } });
Object.defineProperty(exports, "sortPokemonByHeight", { enumerable: true, get: function () { return pokemon_core_1.sortPokemonByHeight; } });
Object.defineProperty(exports, "sortPokemonByWeight", { enumerable: true, get: function () { return pokemon_core_1.sortPokemonByWeight; } });
Object.defineProperty(exports, "sortPokemonByName", { enumerable: true, get: function () { return pokemon_core_1.sortPokemonByName; } });
var nature_core_1 = require("./core/nature.core");
Object.defineProperty(exports, "findNatureByName", { enumerable: true, get: function () { return nature_core_1.findNatureByName; } });
Object.defineProperty(exports, "findNatureByIncreaseStat", { enumerable: true, get: function () { return nature_core_1.findNatureByIncreaseStat; } });
Object.defineProperty(exports, "findNatureByDecreaseStat", { enumerable: true, get: function () { return nature_core_1.findNatureByDecreaseStat; } });
Object.defineProperty(exports, "findNatureByLiking", { enumerable: true, get: function () { return nature_core_1.findNatureByLiking; } });
Object.defineProperty(exports, "findNatureByDisliking", { enumerable: true, get: function () { return nature_core_1.findNatureByDisliking; } });
Object.defineProperty(exports, "getAllNature", { enumerable: true, get: function () { return nature_core_1.getAllNature; } });
var type_core_1 = require("./core/type.core");
Object.defineProperty(exports, "findTypeByName", { enumerable: true, get: function () { return type_core_1.findTypeByName; } });
Object.defineProperty(exports, "getAllTypes", { enumerable: true, get: function () { return type_core_1.getAllTypes; } });
var machineitem_core_1 = require("./core/items-core/machineitem.core");
Object.defineProperty(exports, "findMachineByID", { enumerable: true, get: function () { return machineitem_core_1.findMachineByID; } });
Object.defineProperty(exports, "findMachineByPrice", { enumerable: true, get: function () { return machineitem_core_1.findMachineByPrice; } });
Object.defineProperty(exports, "findMachineByMoves", { enumerable: true, get: function () { return machineitem_core_1.findMachineByMoves; } });
Object.defineProperty(exports, "findMachineByRecipe", { enumerable: true, get: function () { return machineitem_core_1.findMachineByRecipe; } });
Object.defineProperty(exports, "getAllMachine", { enumerable: true, get: function () { return machineitem_core_1.getAllMachine; } });
Object.defineProperty(exports, "getCustomTMsPerPage", { enumerable: true, get: function () { return machineitem_core_1.getCustomTMsPerPage; } });
Object.defineProperty(exports, "getTMsPerPage", { enumerable: true, get: function () { return machineitem_core_1.getTMsPerPage; } });
var pokebalitem_core_1 = require("./core/items-core/pokebalitem.core");
Object.defineProperty(exports, "findPokeBallByName", { enumerable: true, get: function () { return pokebalitem_core_1.findPokeBallByName; } });
Object.defineProperty(exports, "getAllPokeBall", { enumerable: true, get: function () { return pokebalitem_core_1.getAllPokeBall; } });
var battleitem_core_1 = require("./core/items-core/battleitem.core");
Object.defineProperty(exports, "findBattleItemByName", { enumerable: true, get: function () { return battleitem_core_1.findBattleItemByName; } });
Object.defineProperty(exports, "getAllBattleItem", { enumerable: true, get: function () { return battleitem_core_1.getAllBattleItem; } });
var machinematerial_core_1 = require("./core/items-core/machinematerial.core");
Object.defineProperty(exports, "getAllMaterial", { enumerable: true, get: function () { return machinematerial_core_1.getAllMaterial; } });
Object.defineProperty(exports, "findMaterialByName", { enumerable: true, get: function () { return machinematerial_core_1.findMaterialByName; } });
