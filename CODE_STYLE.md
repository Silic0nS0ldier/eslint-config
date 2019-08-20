# Code Style

## Indentation

**4 spaces**

```js
export function indentExample()
{
    return function (echo)
    {
        console.log(echo);
        window.setTimeout(
            () => console.log(echo),
            1500
        );
    }
}
```

Ever a point of debate, without a rule here git diffs can easily loose their change tracking value should a indentation war start. With diff consisteny in mind this rule will not be changed under this ruleset, so sayeth the creator *(of this ruleset)*. With that out of the way, other reasons 4 spaces were chosen as the indentation of choice include;

* Aligns with many of the projects I (@Silic0nS0ldier) was working with when setting out to create this ruleset.
* Indentation is stable across even the most primitive of editors.
* Though tabs are historically customisable regarding indentation, their is no reason such logic cannot be extended to space based indentation (e.g. https://github.com/kylepaulsen/vscode-stretchy-spaces).

### Related ESLint Rules

* `indent`
* `no-mixed-spaces-and-tabs`
* `object-curly-spacing`

## Bracket Positioning

**New line, unless a single line expression within recommended character range**

```js
class BracketExample
{
    constructor(obj)
    {
        this.obj = obj;
        this.anotherObj = { simple: "string" };
    }

    echo()
    {
        console.log({
            ...this.obj,
            ...this.anotherObj,
        });
    }
}
```

### Related ESLint Rules

* `nonblock-statement-body-position`
* `object-curly-newline`
* `object-curly-spacing`


## Semi-colons

**USE THEM**

Although JavaScript and its dervitives work perfectly fine without them, notable edge cases do exist (i.e. https://maurobringolf.ch/2017/06/automatic-semicolon-insertion-edge-cases-in-javascript/).

## Comparison Strictness

**Always use strict comparison operators where possible**

```js
const foo = "1";
if (foo === "1")
{
    console.log("Equal!");
}
else if (foo === 1)
{
    throw new Error("Oh dear!");
}
```

Using strict comparison operators ensures that whoever next reads the projects source does not need to have an intimate understanding of the JavaScript language comparison logic.

### Related ESLint Rules

* ...

## Commas

**If object properties or function params span multiple lines, use a trailing comma**

```js
import { foo } from "./foo.js";
import {
    bar,
    foobar,
} from "./foo-bar.js";

const obj1 = { foo: "bar" };
const obj2 = {
    foo: "bar",
    bar: "foo",
};

function func1(t) {}
function func2(
    longParam1,
    longParam2,
    longParam3,
) {}

func1(256);
func2(
    "a rather long string",
    "another rather long string",
    1_234_567_890,
);
```

### Related ESLint Rules

* ...

## Large Numbers

**Use underscores as separators to divide up large numbers, consider using more expressive code if a "magic number" like a Unix timestamp**

```js
const num1 = 1_234_567_890;
const num2 = 1_234;
const num3 = 123;
```

### Related ESLint Rules

* ...

## Star Imports

**Avoid them**

```js
// Not this
import * as all from "./extremely-large-module.js";
// This
import { smallPart } from "./extremely-large-module.js";
```

There are 2 key reasons for avoiding star imports.

1. They make it easy to fall into the trap of creating monolithic modules.
2. Bundlers have a much more success performing live code inclusion

### Related ESLint Rules

* ...

## Multi-line Comments

**Multi-line comment syntax should be reserved for JSDoc and should be no more than 80 characters wide**

```js
/**
 * @param {number} foo
 * @param {string} bar
 */
function fooBar(foo, bar)
{

}
```

Multi-line commment syntax is required for JSDoc and in most other circumstances proves to distract from the source.

80 character width preference allows comments to be legible across a larger set of screen sizes, and encourges concise documentation.

### Related ESLint Rules

* ...

***

## Rule Template

**Rule description**

```js
// Adherence sample
// Failure scenario should only be provided if necessary
```

Rule reasoning.

### Related ESLint Rules

* Applicable ESLint rules

***