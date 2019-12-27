# Hsimp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/hsimp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/hsimp)

A convenience wrapper of How Secure Is My Password?

[![NPM Badge](https://nodei.co/npm/hsimp.png)](https://npmjs.com/package/hsimp)

## Install

```sh
npm install hsimp
```

## Usage

```js
const hsimp = require("hsimp");

hsimp("123");
/* => {
    time: "24 nanoseconds",
    level: "warning",
    checks: [
        {
            name: "Length: Very short",
            message: "Your password is very short. The longer a password is the more secure it will be.",
            level: "warning",
            },
            {
                name: "Character Variety: Just Numbers",
                message: "Your password only contains numbers. This reduces the number of possible combinations dramatically.",
                level: "warning",
            },
            {
                name: "Possibly a Telephone Number / Date",
                message: "Your password looks like it might be a telephone number or a date. If it is and it has personal significance then it might be very easy for someone to guess.",
                level: "warning",
            },
        ],
    }
*/
```

## API

### hsimp(password, options?)

#### password

Type: `string`

The password to check.

#### options

Type: `object`

##### calculation

###### calcs

Type: `number`\
Default: `40e9`

The number of calculations per second.

###### characterSets

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/character-sets.json

Character sets to check.

##### time

###### periods

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/periods.json

A list of how long each period is in seconds.

###### namedNumbers

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/named-numbers.json

A list of named numbers.

###### forever

Type: `string`\
Default: `Forever`

If the amount of time it will take gets ridiculous, this should be returned.

###### instantly

Type: `string`\
Default: `Instantly`

If the amount of time is basically immediate, this should be returned.

##### checks

###### dictionary

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/top10k.json

A list of common passwords.

###### patterns

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/patterns.json

A list of patterns to check.

###### messages

Type: `array`\
Default: See https://github.com/howsecureismypassword/modules-purescript/blob/develop/dictionaries/checks.json

The messages to display for each check.
