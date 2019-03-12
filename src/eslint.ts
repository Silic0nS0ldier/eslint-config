import { Linter } from "eslint";

const config: Linter.Config = {
    rules: {
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": [
            "error",
            "always",
            {
                arraysInArrays: false
            }
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "as-needed",
            {
                requireForBlockBody: true
            }
        ],
        "arrow-spacing": "error",
        "block-spacing": "error",
        // Inherently spaces out code in a more readable fashion.
        // Makes it easier to locate blocks.
        "brace-style": [
            "error",
            "allman"
        ],
        camelcase: [
            "error"
        ],
        "comma-dangle": [
            "error",
            "always"
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": [
            "error",
            "that"
        ],
        "constructor-super": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "func-names": [
            "error",
            "as-needed"
        ],
        "func-style": [
            "error",
            "declaration",
            {
                allowArrowFunctions: true
            }
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "generator-star-spacing": [
            "error",
            {
                before: false,
                after: true,
                anonymous: "after",
                method: "before"
            }
        ],
        "id-length": [
            "error",
            {
                max: 12
            }
        ],
        "implicit-arrow-linebreak": "error",
        "indent": [
            "error",
            4
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": "error",
        "linebreak-style": "error",
        "lines-around-comment": [
            "error",
            {
                beforeLineComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,

            }
        ],
        "lines-between-class-members": "error",
        "max-depth": [
            "error",
            {
                max: 6
            }
        ],
        "max-len": [
            "error",
            {
                code: 100,
                comments: 80
            }
        ],
        "max-lines": [
            "warn",
            {
                max: 370,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        "max-lines-per-function": [
            "warn",
            {
                max: 70,
                IIFEs: true
            }
        ],
        "max-nested-callbacks": [
            "error",
            {
                max: 1
            }
        ],
        "max-params": "error",
        // Need to check how this plays with function literals
        "max-statements-per-line": "error",
        "multiline-comment-style": [
            "error",
            "separate-lines"// Shouldn't affect JSDoc
        ],
        "new-cap": [
            "error",
            {
                "capIsNew": true,
            }
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        // 99% of the time, it'll be a mistake.
        // Override at location to indicate deliberate use.
        "no-bitwise": "error",
        // Makes control flow MUCH harder to follow
        "no-confusing-arrow": [
            "error",
            {
                allowParens: false
            }
        ],
        "no-const-assign": "error",
        "no-continue": "error",
        "no-class-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": [
            "error",
            {
                includeExports: true
            }
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                nestedBinaryExpressions: false
            }
        ],
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-new-symbol": "error",
        "no-mixed-operators": [
            "error",
            {
                allowSamePrecedence: true
            }
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-restricted-syntax": [
            "error",
            "WithStatement"
        ],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-this-before-super": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": [
            "error",
            {
                multiline: true,
                minProperties: 2
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": false
            }
        ],
        "object-shorthand": [
            "error",
            "always",
            {
                avoidQuotes: true,
                ignoreConstructors: true,
                avoidExplicitReturnArrows: true
            }
        ],
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error",
            'always'
        ],
        "operator-assignment": "error",
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            {
                blocks: "never",
                classes: "always",
                switches: "never"
            },
            {
                allowSingleLineBlocks: false
            }
        ],
        "prefer-arrow-callback": [
            "error",
            {
                allowNamedFunctions: true,
                allowUnboundThis: false
            }
        ],
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        "require-yield": "error",
        "rest-spread-spacing": "error",
        semi: "error",
        "spaced-comment": [
            "error",
            "always",
            {
                markers: [
                    "!"
                ]
            }
        ],
        "semi-style": "error",
        "sort-keys": [
            "error",
            "asc",
            {
                caseSensitive: false,
                natural: true
            }
        ],
        "sort-imports": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "yield-star-spacing": [
            "error",
            "after"
        ]
    }
};

export default config;
