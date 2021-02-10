module.exports = {
    rules: {

        /**
         * Consistent and readable array usage.
         * [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)
         * @example
         * // good
         * [ 1, 2, 3 ];
         * [
         *     1,
         *     2,
         *     3,
         * ]
         */
        "array-bracket-newline": [
            "error",
            "consistent",
        ],

        /**
         * Consistent, readable arrays.
         * [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)
         * @example
         * // good
         * [ 1 ];
         * [ 1, 2 ];
         * [[ 1, 2 ], [ 3, 4 ]];
         * [{ foo: "bar" }];
         * [
         *     [ 1, 2 ],
         *     { foo: "bar" },
         *     3,
         * ]
         */
        "array-bracket-spacing": [
            "error",
            "always",
            {
                arraysInArrays: false,
                objectsInArrays: false,
            },
        ],

        /**
         * Consistent and readable array usage.
         * [array-element-newline](https://eslint.org/docs/rules/array-element-newline)
         * @example
         * // good
         * [ 1, 2, 3 ];
         * [ 1 ];
         * [
         *     1,
         *     2,
         *     3,
         *     4,
         * ];
         */
        "array-element-newline": [
            "error",
            "consistent",
        ],

        /**
         * Avoids confusion, constraints to scenarios where verbosity hurts legibility.
         * [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
         * @example
         * // good
         * () => 0;
         * () => ({ foo: 0 });
         */
        "arrow-body-style": [
            "error",
            "never",
        ],

        /**
         * Reduces verbosity where arrow functions can be used.
         * [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
         * @example
         * // good
         * a => a + b;
         * (a, b) => a + b;
         * (a, b) => ({ a, b });
         */
        "arrow-parens": [
            "error",
            "as-needed",
        ],

        /**
         * Legible arrow functions.
         * [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
         * @example
         * // good
         * a => a + b;
         * (a, b) => ({ a, b });
         */
        "arrow-spacing": "error",

        /**
         * Social distancing for our code, don't crowd the curely brackets.
         * Also helps keep statements logically separated from their owning block, I guess.
         * [block-spacing](https://eslint.org/docs/rules/block-spacing)
         * @example
         * // good
         * { foo++; }
         * {
         *     bar--;
         *     bar *= 10;
         * }
         */
        "block-spacing": "error",

        /**
         * Provides natural spacing that helps separate owning entity identification from its contained content.
         * [brace-style](https://eslint.org/docs/rules/brace-style)
         */
        "brace-style": [
            "error",
            "allman",
        ],

        /**
         * Consistent variable structuring without sacrificing space.
         * [](https://eslint.org/docs/rules/)
         */
        camelcase: [
            "error",
        ],

        /**
         * Quicker source manipulations.
         * [](https://eslint.org/docs/rules/)
         */
        "comma-dangle": [
            "error",
            "always",
        ],

        /**
         * Prevent clutter.
         * [](https://eslint.org/docs/rules/)
         */
        "comma-spacing": "error",

        /**
         * Consistent and common.
         * [](https://eslint.org/docs/rules/)
         */
        "comma-style": "error",

        /**
         * Consistent computed property declarations and accesses.
         * Unique vs. array declarations.
         * [](https://eslint.org/docs/rules/)
         */
        "computed-property-spacing": "error",

        /**
         * Eliminate cognetive load associated with figuring out what `this` is.
         * [](https://eslint.org/docs/rules/)
         */
        "consistent-this": [
            "error",
            "that",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "constructor-super": "error",

        /**
         * Improve compatibilty across tools.
         * [](https://eslint.org/docs/rules/)
         */
        "eol-last": "error",

        /**
         * Consistent function call spacing.
         * [](https://eslint.org/docs/rules/)
         */
        "func-call-spacing": "error",

        /**
         * No redundant idenifiers.
         * [](https://eslint.org/docs/rules/)
         */
        "func-names": [
            "error",
            "as-needed",
        ],

        /**
         * Require functions to be defined with declarations.
         * [](https://eslint.org/docs/rules/)
         */
        "func-style": [
            "error",
            "declaration",
            { allowArrowFunctions: true, },
        ],

        /**
         * Consistent function paramater placement.
         * [](https://eslint.org/docs/rules/)
         */
        "function-paren-newline": [
            "error",
            "consistent",
        ],

        /**
         * Consistent generator functions.
         * [](https://eslint.org/docs/rules/)
         */
        "generator-star-spacing": [
            "error",
            {
                after: true,
                anonymous: "after",
                before: false,
                method: "before",
            },
        ],

        /**
         * Keep identifiers short to reduce source verbosity and encourage
         * smarter structuring of data.
         * [](https://eslint.org/docs/rules/)
         */
        "id-length": [
            "warn",
            {
                max: 20,
                properties: "never",
            },
        ],

        /**
         * Concise, and generally more readable.
         * [](https://eslint.org/docs/rules/)
         */
        "implicit-arrow-linebreak": "error",

        /**
         * Consistent indentation across all editors.
         * [](https://eslint.org/docs/rules/)
         */
        indent: [
            "error",
            4,
        ],

        /**
         * Match XML markup and similiar code.
         * [](https://eslint.org/docs/rules/)
         */
        "jsx-quotes": [
            "error",
            "prefer-double",
        ],

        /**
         * Consistent array key spacing.
         * [](https://eslint.org/docs/rules/)
         */
        "key-spacing": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "keyword-spacing": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "line-comment-position": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "linebreak-style": "error",

        /**
         * Frame comments to make them easier to pick out.
         * [](https://eslint.org/docs/rules/)
         */
        "lines-around-comment": [
            "error",
            {
                allowBlockEnd: true,
                allowBlockStart: true,
                beforeLineComment: true,

            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "lines-between-class-members": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "max-depth": [
            "error",
            { max: 6, },
        ],

        /**
         * Keep source concise, and prevent dependence on line wrapping.
         * Also permits a more pleasent experience reviewing code on various
         * devices.
         * [](https://eslint.org/docs/rules/)
         */
        "max-len": [
            "error",
            {

                /**
                 * Keep source concise and readable.
                 */
                code: 100,

                /**
                 * Keep comments concise and readable, forming an "island"
                 * within the source via padding to better distinguish.
                 */
                comments: 80,
            },
        ],

        /**
         * Keep files at a maintainable size. Comments are ignored which
         * translates to significant room for well documented logic.
         * @todo Is syntax like a bracket included in the calculation?
         * [](https://eslint.org/docs/rules/)
         */
        "max-lines": [
            "warn",
            {
                max: 370,
                skipBlankLines: true,
                skipComments: true,
            },
        ],

        /**
         * Prevent large blocks of unreusable code from forming.
         * [](https://eslint.org/docs/rules/)
         */
        "max-lines-per-function": [
            "warn",
            {
                IIFEs: true,
                max: 70,
            },
        ],

        /**
         * Keep program flow easily traceable.
         * [](https://eslint.org/docs/rules/)
         */
        "max-nested-callbacks": [
            "error",
            { max: 1, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "max-params": "error",

        /**
         * Avoid high density complex code.
         * @todo Need to check how this plays with function literals
         * [](https://eslint.org/docs/rules/)
         */
        "max-statements-per-line": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "multiline-comment-style": [
            "error",

            /**
             * @todo Shouldn't affect JSDoc
             */
            "separate-lines",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "new-cap": [
            "error",
            { capIsNew: true, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "new-parens": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "newline-per-chained-call": "error",

        /**
         * Consistent array declarations.
         * [](https://eslint.org/docs/rules/)
         */
        "no-array-constructor": "error",

        /**
         * Avoid hard to understand JS bitwise logic. Usage is usually by
         * mistake, overrides should be used if use is deliberate.
         * [](https://eslint.org/docs/rules/)
         */
        "no-bitwise": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-class-assign": "error",

        /**
         * @todo Makes control flow MUCH harder to follow
         * [](https://eslint.org/docs/rules/)
         */
        "no-confusing-arrow": [
            "error",
            { allowParens: false, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-const-assign": "error",

        /**
         * Continue statements interrupt normal flow and as loop blocks are not
         * commonly trated as function blocks, bad states may be created.
         * [](https://eslint.org/docs/rules/)
         */
        "no-continue": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-dupe-class-members": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-duplicate-imports": [
            "error",
            { includeExports: true, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-extra-parens": [
            "error",
            "all",
            { nestedBinaryExpressions: false, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-inline-comments": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-lonely-if": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-mixed-operators": [
            "error",
            { allowSamePrecedence: true, },
        ],

        /**
         * Force consistent indentation means.
         * [](https://eslint.org/docs/rules/)
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-multi-assign": "error",

        /**
         * Prevent excess useless whitespace.
         * [](https://eslint.org/docs/rules/)
         */
        "no-multiple-empty-lines": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-nested-ternary": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-new-object": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-new-symbol": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-restricted-syntax": [
            "error",
            "WithStatement",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-tabs": "error",

        /**
         * Prevent usage of class resources before parent has been constructed.
         * [](https://eslint.org/docs/rules/)
         */
        "no-this-before-super": "error",

        /**
         * Prevent garbage whitespace at the end of lines.
         * [](https://eslint.org/docs/rules/)
         */
        "no-trailing-spaces": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-underscore-dangle": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-unneeded-ternary": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-useless-computed-key": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-useless-constructor": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-useless-rename": "error",

        /**
         * Prevent usage of loosly scoped `var`.
         * [](https://eslint.org/docs/rules/)
         */
        "no-var": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "no-whitespace-before-property": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "nonblock-statement-body-position": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "object-curly-newline": [
            "error",
            {
                minProperties: 2,
                multiline: true,
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "object-curly-spacing": [
            "error",
            "always",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "object-property-newline": [
            "error",
            { allowMultiplePropertiesPerLine: false, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "object-shorthand": [
            "error",
            "always",
            {
                avoidExplicitReturnArrows: true,
                avoidQuotes: true,
                ignoreConstructors: true,
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "one-var": [
            "error",
            "never",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "one-var-declaration-per-line": [
            "error",
            "always",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "operator-assignment": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "operator-linebreak": [
            "error",
            "before",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "padded-blocks": [
            "error",
            "never",
            { allowSingleLineBlocks: false, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-arrow-callback": [
            "error",
            {
                allowNamedFunctions: true,
                allowUnboundThis: false,
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-const": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-numeric-literals": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-object-spread": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-rest-params": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-spread": "error",

        /**
         * Template strings are easier to read compared to a lengthy
         * concatenation sequence.
         * [](https://eslint.org/docs/rules/)
         */
        "prefer-template": "error",

        /**
         * @todo This should be a JSX specific rule.
         * [](https://eslint.org/docs/rules/)
         */
        "quote-props": [
            "error",
            "as-needed",
        ],

        /**
         * An apostrophe is highly likely to appear in strings. This also
         * maintains consistency with JSX string preferences throughout the
         * community.
         *
         * Beyond that, this is consistent with strictly typed languages like
         * C#.
         * [](https://eslint.org/docs/rules/)
         */
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "require-yield": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "rest-spread-spacing": "error",

        /**
         * Prevent dependence on poorly understood and easily misused magic
         * statement termination.
         * [](https://eslint.org/docs/rules/)
         */
        semi: "error",

        /**
         * @todo
         */
        "semi-style": "error",

        /**
         * Easier time inspecting imports. Less wars over ordering.
         * [](https://eslint.org/docs/rules/)
         */
        "sort-imports": [
            "error",
            { ignoreCase: true, },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "sort-keys": [
            "error",
            "asc",
            {
                caseSensitive: false,
                natural: true,
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "space-before-blocks": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                asyncArrow: "never",
                named: "never",
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "space-in-parens": [
            "error",
            "never",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "space-infix-ops": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "space-unary-ops": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "spaced-comment": [
            "error",
            "always",
            {
                markers: [
                    "!",
                ],
            },
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "switch-colon-spacing": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "symbol-description": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "template-curly-spacing": [
            "error",
            "never",
        ],

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "template-tag-spacing": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "unicode-bom": "error",

        /**
         * @todo
         * [](https://eslint.org/docs/rules/)
         */
        "yield-star-spacing": [
            "error",
            "after",
        ],
    },
};
