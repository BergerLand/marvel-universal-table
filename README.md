# The Marvel Universal Table

If you're here, I'd imagine you already know what The Marvel Universal Table is. A friend wanted me to build him a dice roller for the Marvel table top game and I couldn't find any source of the data, so after many attempts, I landed on creating the table in JSON format and decided to make it available in the public domain.

## Getting Started

To use The Marvel Universal Table, first you need to install it:

`npm i marvel-universal-table`

Then, import it into your project:

`const marvelUniversalTable = require('marvel-universal-table');`

## Usage

The Marvel Universal Table has four parts:

* feats: Flat Array of Strings

`marvelUniversalTable.feats;`

This would be used to get an array of all the named feats from the Marvel Universal Table.

***

* ranks: Array of Objects of Strings

`marvelUniversalTable.ranks;`

This would be used to get an array of all the ranks, with a `name` and `range` property returned as strings.

`marvelUniversalTable.ranks.name;`
`marvelUniversalTable.ranks.range;`

***

* results: Nested Object

`marvelUniversalTable.results;`


***

* chance: Nested Object

`marvelUniversalTable.{{ 1 - 100 }};`

## Support or Contact

If you need help feel free to send me an email at Phillip@Berger.Land and I'll try my best to get back to you.  I am a full time developer so please be patient if I don't respond right away.
