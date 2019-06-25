/* eslint-disable id-length */
export default {
    rules: {

        /**
         * Consistent and readable array usage.
         */
        "array-bracket-newline": [
            "error",
            "consistent",
        ],

        /**
         * @todo
         */
        "array-bracket-spacing": [
            "error",
            "always",
            { arraysInArrays: false, },
        ],

        /**
         * Consistent and readable array usage.
         */
        "array-element-newline": [
            "error",
            "consistent",
        ],

        /**
         * Concise.
         */
        "arrow-body-style": [
            "error",
            "as-needed",
        ],

        /**
         * Concise.
         */
        "arrow-parens": [
            "error",
            "as-needed",
            { requireForBlockBody: true, },
        ],

        /**
         * @todo
         */
        "arrow-spacing": "error",

        /**
         * Prevent unnecessary whitespace.
         * Spacing is managed via a pre-comment empty line and bracket
         * placement.
         */
        "block-spacing": "error",

        /**
         * Spaces out code in a reliable and readable fashion.
         * Easier to locate blocks.
         */
        "brace-style": [
            "error",
            "allman",
        ],

        /**
         * Consistent variable structuring without sacrificing space.
         */
        camelcase: [
            "error",
        ],

        /**
         * Quicker source manipulations.
         */
        "comma-dangle": [
            "error",
            "always",
        ],

        /**
         * Prevent clutter.
         */
        "comma-spacing": "error",

        /**
         * @todo
         */
        "comma-style": "error",

        /**
         * @todo
         */
        "computed-property-spacing": "error",

        /**
         * Eliminate cognetive load associated with figuring out what `this` is.
         */
        "consistent-this": [
            "error",
            "that",
        ],

        /**
         * @todo
         */
        "constructor-super": "error",

        /**
         * Improve compatibilty across tools.
         */
        "eol-last": "error",

        /**
         * @todo
         */
        "func-call-spacing": "error",

        /**
         * No redundant idenifiers.
         */
        "func-names": [
            "error",
            "as-needed",
        ],

        /**
         * @todo
         */
        "func-style": [
            "error",
            "declaration",
            { allowArrowFunctions: true, },
        ],

        /**
         * Consistent function paramater placement.
         */
        "function-paren-newline": [
            "error",
            "consistent",
        ],

        /**
         * Consistent generator functions.
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
         */
        "id-length": [
            "error",
            { max: 12, },
        ],

        /**
         * @todo
         */
        "implicit-arrow-linebreak": "error",

        /**
         * Consistent indentation across all editors.
         */
        indent: [
            "error",
            4,
        ],

        /**
         * Match XML markup and other code style.
         */
        "jsx-quotes": [
            "error",
            "prefer-double",
        ],

        /**
         * @todo
         */
        "key-spacing": "error",

        /**
         * @todo
         */
        "keyword-spacing": "error",

        /**
         * @todo
         */
        "line-comment-position": "error",

        /**
         * @todo
         */
        "linebreak-style": "error",

        /**
         * Frame comments to make them easier to pick out.
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
         */
        "lines-between-class-members": "error",
        "max-depth": [
            "error",
            { max: 6, },
        ],

        /**
         * Keep source concise, and prevent dependence on line wrapping.
         * Also permits a more pleasent experience reviewing code on various
         * devices.
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
         */
        "max-nested-callbacks": [
            "error",
            { max: 1, },
        ],

        /**
         * @todo
         */
        "max-params": "error",

        /**
         * Avoid high density complex code.
         * @todo Need to check how this plays with function literals
         */
        "max-statements-per-line": "error",
        "multiline-comment-style": [
            "error",

            /**
             * @todo Shouldn't affect JSDoc
             */
            "separate-lines",
        ],

        /**
         * @todo
         */
        "new-cap": [
            "error",
            { capIsNew: true, },
        ],

        /**
         * @todo
         */
        "new-parens": "error",

        /**
         * @todo
         */
        "newline-per-chained-call": "error",

        /**
         * Consistent array declarations.
         */
        "no-array-constructor": "error",

        /**
         * Avoid hard to understand JS bitwise logic. Usage is usually by
         * mistake, overrides should be used if use is deliberate.
         */
        "no-bitwise": "error",

        /**
         * @todo
         */
        "no-class-assign": "error",

        /**
         * @todo Makes control flow MUCH harder to follow
         */
        "no-confusing-arrow": [
            "error",
            { allowParens: false, },
        ],

        /**
         * @todo
         */
        "no-const-assign": "error",

        /**
         * Continue statements interrupt normal flow and as loop blocks are not
         * commonly trated as function blocks, bad states may be created.
         */
        "no-continue": "error",

        /**
         * @todo
         */
        "no-dupe-class-members": "error",

        /**
         * @todo
         */
        "no-duplicate-imports": [
            "error",
            { includeExports: true, },
        ],

        /**
         * @todo
         */
        "no-extra-parens": [
            "error",
            "all",
            { nestedBinaryExpressions: false, },
        ],

        /**
         * @todo
         */
        "no-inline-comments": "error",

        /**
         * @todo
         */
        "no-lonely-if": "error",

        /**
         * @todo
         */
        "no-mixed-operators": [
            "error",
            { allowSamePrecedence: true, },
        ],

        /**
         * Force consistent indentation means.
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * @todo
         */
        "no-multi-assign": "error",

        /**
         * Prevent excess useless whitespace.
         */
        "no-multiple-empty-lines": "error",

        /**
         * @todo
         */
        "no-nested-ternary": "error",

        /**
         * @todo
         */
        "no-new-object": "error",

        /**
         * @todo
         */
        "no-new-symbol": "error",

        /**
         * @todo
         */
        "no-restricted-syntax": [
            "error",
            "WithStatement",
        ],

        /**
         * @todo
         */
        "no-tabs": "error",

        /**
         * Prevent usage of class resources before parent has been constructed.
         */
        "no-this-before-super": "error",

        /**
         * Prevent garbage whitespace at the end of lines.
         */
        "no-trailing-spaces": "error",

        /**
         * @todo
         */
        "no-underscore-dangle": "error",

        /**
         * @todo
         */
        "no-unneeded-ternary": "error",

        /**
         * @todo
         */
        "no-useless-computed-key": "error",

        /**
         * @todo
         */
        "no-useless-constructor": "error",

        /**
         * @todo
         */
        "no-useless-rename": "error",

        /**
         * Prevent usage of loosly scoped `var`.
         */
        "no-var": "error",

        /**
         * @todo
         */
        "no-whitespace-before-property": "error",

        /**
         * @todo
         */
        "nonblock-statement-body-position": "error",

        /**
         * @todo
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
         */
        "object-curly-spacing": [
            "error",
            "always",
        ],

        /**
         * @todo
         */
        "object-property-newline": [
            "error",
            { allowMultiplePropertiesPerLine: false, },
        ],

        /**
         * @todo
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
         */
        "one-var": [
            "error",
            "never",
        ],

        /**
         *
         */
        "one-var-declaration-per-line": [
            "error",
            "always",
        ],

        /**
         * @todo
         */
        "operator-assignment": "error",

        /**
         * @todo
         */
        "operator-linebreak": [
            "error",
            "before",
        ],

        /**
         * @todo
         */
        "padded-blocks": [
            "error",
            "never",
            { allowSingleLineBlocks: false, },
        ],

        /**
         * @todo
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
         */
        "prefer-const": "error",

        /**
         * @todo
         */
        "prefer-numeric-literals": "error",

        /**
         * @todo
         */
        "prefer-object-spread": "error",

        /**
         * @todo
         */
        "prefer-rest-params": "error",

        /**
         * @todo
         */
        "prefer-spread": "error",

        /**
         * Template strings are easier to read compared to a lengthy
         * concatenation sequence.
         */
        "prefer-template": "error",

        /**
         * @todo This should be a JSX specific rule.
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
         */
        "require-yield": "error",

        /**
         * @todo
         */
        "rest-spread-spacing": "error",

        /**
         * Prevent dependence on poorly understood and easily misused magic
         * statement termination.
         */
        semi: "error",

        /**
         * @todo
         */
        "semi-style": "error",

        /**
         * Easier time inspecting imports. Less wars over ordering.
         */
        "sort-imports": [
            "error",
            { ignoreCase: true, },
        ],

        /**
         * @todo
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
         */
        "space-before-blocks": "error",

        /**
         * @todo
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
         */
        "space-in-parens": [
            "error",
            "never",
        ],

        /**
         * @todo
         */
        "space-infix-ops": "error",

        /**
         * @todo
         */
        "space-unary-ops": "error",

        /**
         * @todo
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
         */
        "switch-colon-spacing": "error",

        /**
         * @todo
         */
        "symbol-description": "error",

        /**
         * @todo
         */
        "template-curly-spacing": [
            "error",
            "never",
        ],

        /**
         * @todo
         */
        "template-tag-spacing": "error",

        /**
         * @todo
         */
        "unicode-bom": "error",

        /**
         * @todo
         */
        "yield-star-spacing": [
            "error",
            "after",
        ],
    },
};
