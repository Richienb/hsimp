import { PartialDeep } from "type-fest"

declare namespace hsimp {
    /**
     * A unicode character set.
    */
    interface CharacterSet {
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
    type CharacterSets = CharacterSet[]

    /**
     * A pair of a date period (example: year) and it's duration in seconds (example: 31557600).
    */
    interface Period {
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
    type Periods = Period[]

    /**
     * A pair of a number's name (example: million) and it's numerical equivalent (example: 1000000).
    */
    interface NamedNumber {
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
    type NamedNumbers = NamedNumber[]

    /**
     * A password pattern.
    */
    interface Pattern {
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
    type Patterns = Pattern[]

    /**
     * A message to return based on a matching pattern.
    */
    interface Message {
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
    type Messages = Message[]

    /**
     * A dictionary of passwords which should be judged as solved "instantly".
    */
    type Dictionary = string[]

    interface Config {
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
    interface Check {
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
    type Checks = Check[]

    /**
     * The results of the password check.
    */
    interface Result {
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
 * const hsimp = require("hsimp");
 *
 * hsimp("123");
 * {
 *     time: "24 nanoseconds",
 *     level: "warning",
 *     checks: [
 *         {
 *             name: "Length: Very short",
 *             message: "Your password is very short. The longer a password is the more secure it will be.",
 *             level: "warning",
 *             },
 *         {
 *             name: "Character Variety: Just Numbers",
 *             message: "Your password only contains numbers. This reduces the number of possible combinations dramatically.",
 *             level: "warning",
 *         },
 *         {
 *             name: "Possibly a Telephone Number / Date",
 *             message: "Your password looks like it might be a telephone number or a date. If it is and it has personal significance then it might be very easy for someone to guess.",
 *             level: "warning",
 *         },
 *     ],
 * }
 * ```
*/
declare function hsimp(password: string, config?: PartialDeep<hsimp.Config>): hsimp.Result

export = hsimp
