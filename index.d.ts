import { PartialDeep } from "type-fest"

declare namespace Hsimp {
    /**
     * A unicode character set.
    */
    declare interface CharacterSet {
        /**
         * The name of the character set.
        */
        name: string

        /**
         * A regex encoded as a string that matches the character set.
        */
        matches: string

        /**
         * The security value of the set.
        */
        value: number
    }

    /**
     * Some unicode character sets.
    */
    declare type CharacterSets = CharacterSet[]

    /**
     * A pair of a date period (example: year) and it's duration in seconds (example: 31557600).
    */
    declare interface Period {
        /**
         * Singular form of it's name.
        */
        singular: string

        /**
         * Plural form of it's name.
        */
        plural: string

        /**
         * The duration of the period in seconds.
        */
        seconds: number
    }

    /**
     * Pairs of date periods (example: year) and their durations in seconds (example: 31557600).
    */
    declare type Periods = Period[]

    /**
     * A pair of a number's name (example: million) and it's numerical equivalent (example: 1000000).
    */
    declare interface NamedNumber {
        /**
         * The name of the number.
        */
        name: string

        /**
         * The value of the number.
        */
        value: number
    }

    /**
     * Pairs of number names (example: million) and their numerical equivalents (example: 1000000).
    */
    declare type NamedNumbers = NamedNumber[]

    /**
     * A password pattern.
    */
    declare interface Pattern {
        /**
         * The level of security offered by that pattern.
        */
        level: "warning" | "notice" | "achievement" | "easter-egg"

        /**
         * An ID to reference that pattern by.
        */
        id: string

        /**
         * A regex encoded as a string which matches that pattern.
        */
        regex: string
    }

    /**
     * Password patterns.
    */
    declare type Patterns = Pattern[]

    /**
     * A message to return based on a matching pattern.
    */
    declare interface Message {
        /**
         * The ID of a pattern.
        */
        id: string

        /**
         * A human-readable name.
        */
        name: string

        /**
         * A description of the pattern.
        */
        message: string
    }

    /**
     * Messages to return based on matching patterns.
    */
    declare type Messages = Message[]

    /**
     * A dictionary of passwords which should be judged as solved "instantly".
    */
    declare type Dictionary = string[]

    declare interface Config {
        calculation: {
            /**
             * The number of calculations per second.
            */
            calcs: number

            /**
             * Character sets to check.
            */
            characterSets: CharacterSets
        }
        time: {
            /**
             * A list of how long each period is in seconds.
            */
            periods: Periods

            /**
             * A list of named numbers.
            */
            namedNumbers: NamedNumbers

            /**
             * If the amount of time it will take gets ridiculous, this should be returned.
            */
            forever: string

            /**
             * If the amount of time is basically immediate, this should be returned.
            */
            instantly: string
        }
        checks: {
            /**
             * A list of common passwords.
            */
            dictionary: Dictionary

            /**
             * A list of patterns to check.
            */
            patterns: Patterns

            /**
             * The messages to display for each check.
            */
            messages: Messages
        }
    }

    /**
     * A password security check.
    */
    declare interface Check {
        /**
         * The name of a pattern.
        */
        name: string

        /**
         * The message associated with the pattern.
        */
        message: string

        /**
         * The level of security matched by the pattern.
        */
        level: string
    }

    /**
     * Password security checks.
    */
    declare type Checks = Check[]

    declare interface Result {
        time: string,
        level: string,
        checks: Checks
    }
}

/**
 * A convenience wrapper of How Secure Is My Password?
 * @param password The password to check.
 * @param config The configuration options for the password check.
 * @example
 * ```
 * const theModule = require("the-module");
 * theModule("unicorns");
 * //=> 'unicorns & rainbows'
 * ```
*/
declare function hsimp(password: string, config?: PartialDeep<Hsimp.Config>): Hsimp.Result;

export = hsimp;
