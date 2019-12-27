"use strict"

const { default: ow } = require("ow")
const mergeOptions = require("merge-options").bind({ ignoreUndefined: true })
const setup = require("hsimp-purescript")
const characterSets = require("hsimp-purescript/dictionaries/character-sets")
const periods = require("hsimp-purescript/dictionaries/periods")
const namedNumbers = require("hsimp-purescript/dictionaries/named-numbers")
const dictionary = require("hsimp-purescript/dictionaries/top10k")
const patterns = require("hsimp-purescript/dictionaries/patterns")
const messages = require("hsimp-purescript/dictionaries/checks")

const defaultConfig = {
    calculation: {
        calcs: 40e9,
        characterSets,
    },
    time: {
        periods,
        namedNumbers,
        forever: "Forever",
        instantly: "Instantly",
    },
    checks: {
        dictionary,
        patterns,
        messages,
    },
}

module.exports = (password, config) => {
    ow(password, ow.string)
    ow(config, ow.any(ow.object, ow.undefined))

    return setup(mergeOptions(defaultConfig, config))(password)
}
