# Code Style

Consistent code style should make the actual logic the focus (we humans recognise patterns automatically, making pattern breaks stand out and break focus) and discourage confusing (and lesser known/poorly understood) syntax. Readability is a requirement, and one that is difficult to codify as what consistues readable varies depending on an individuals level of experience.

This code style is one attempt among many. A ~holy gospel~ set of laws that outline how JavaScript code (and supported derivatives) should be styled.

* [TypeScript Extension](./CODE_STYLE_EXT_TYPESCRIPT.md)

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
* Tabs are often cited for accessibility (resizable), I'm of the mind that tooling needs to mature to handle indentation in general. The technology exists (e.g. https://github.com/kylepaulsen/vscode-stretchy-spaces).

### Related ESLint Rules

* `indent`
* `no-mixed-spaces-and-tabs`
* `object-curly-spacing`

## Bracket Positioning

**New line except when multi-line function arg declarations are used**

```js
class BracketExample
{
    constructor(obj) {
        this.obj = obj;
        this.anotherObj = { simple: "string" };
        this.yetAnotherObj = {
            a: 'b',
            c: 'd',
        };
    }

    echo() {
        console.log({
            ...this.obj,
            ...this.anotherObj,
        });
    }

    yell(
        one,
        two,
        three,
    ) {
        console.log(one);
        console.log(two);
        console.log(three);
    }
}
```

### Related ESLint Rules

* `nonblock-statement-body-position`
* `object-curly-newline`
* `object-curly-spacing`


## Semi-colons

**USE THEM**

Although JavaScript and its dervitives work perfectly fine without them, notable edge cases do exist (i.e. https://maurobringolf.ch/2017/06/automatic-semicolon-insertion-edge-cases-in-javascript/) due to Automatic Semicolon Insertion (ASI) not working out as expected.

### Related ESLint Rules

* `semi`
* `no-unreachable` (ASI quirks)

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

* `no-extra-strict`
* `no-compare-neg-zero`
* `valid-typeof`
* `no-eq-null`

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

## Star Imports

**Avoid them**

Star, all or "namespace" imports make it significantly more difficult for programmers to reliably identify unused code and for tooling to shed unused code from bundles. While valid use cases exist, they should be used sparingly.

Dynamic imports face the same sort of issues but have their risks offset inhernetly (they won't inflate the initial bundle size). Proper usage of dynamic imports is significantly dependent on architecture and the use case, and as such as wholy exempt from the current iteration of this code style. It is preferrable however that dynamic imports are avoided where possible for external code in favour of wrapping the import such that specific exports are included only.

### Related ESLint Rules

* ...

## Odds and Ends

* `no-self-compare` - Self-comparisons are redundant in most cases.
* `no-extend-native` - Nigh impossible to work with, a source of bugs, a source of vulnerabilities.
* `no-eval` - For it is evil.
* `no-implicit-coercion` - Confusing to new programmers, can be misinterpreted by anyone resulting in accidental bugs.

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