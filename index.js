"use strict"

const { assert } = require("@sindresorhus/is")
const mergeOptions = require("merge-options").bind({ ignoreUndefined: true })
const setup = require("hsimp-purescript")

const defaultConfig = {
	calculation: {
		calcs: 40e9,
		characterSets: require("hsimp-purescript/dictionaries/character-sets"),
	},
	time: {
		periods: require("hsimp-purescript/dictionaries/periods"),
		namedNumbers: require("hsimp-purescript/dictionaries/named-numbers"),
		forever: "Forever",
		instantly: "Instantly",
	},
	checks: {
		dictionary: require("hsimp-purescript/dictionaries/top10k"),
		patterns: require("hsimp-purescript/dictionaries/patterns"),
		messages: require("hsimp-purescript/dictionaries/checks"),
	},
}

module.exports = (password, config = {}) => {
	assert.string(password)
	assert.plainObject(config)

	return setup(mergeOptions(defaultConfig, config))(password)
}
