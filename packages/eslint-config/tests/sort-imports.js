// @ts-check
import test from "ava";
import { CLIEngine } from "eslint";
import * as path from "path";

/** @typedef {import("ava").ExecutionContext} Assert */

/**
 *
 * @param {string} callerPath Location of the file to parse.
 * @param {*} eslintRcPath Location of the ESLint configuration file.
 */
function eslintAssert(callerPath, eslintRcPath) {
    const cli = new CLIEngine({ configFile: path.resolve(callerPath, eslintRcPath) });

    return {
        /**
         * Inspects source and verifies it fails linting in expected manner.
         * @param {Assert} t AVA execution context.
         * @param {string} src Source snippet to validate.
         */
        inline(t, src)
        {
            // Compare with last result
            t.snapshot(cli.executeOnText(src));
        },

        /**
         * Inspects file and verifies it fails linting in expected manner.
         * Mainly used for dog-fooding.
         * @param {Assert} t AVA execution context.
         * @param {string} callerPath Path of calling test file.
         * @param {string} srcPath Path of target file.
         */
        file(t, callerPath, srcPath)
        {
            // Get result
            const result = cli.executeOnFiles(
                [ path.resolve(callerPath, srcPath) ]
            );

            // Compare with last result
            t.snapshot(result);
        }
    }
}

/**
 * Trims off the first and last line.
 * @param {TemplateStringsArray} template
 * @param {any[]} subsitutions
 */
function javascript(template, ...subsitutions) {
    let str = String.raw(template, ...subsitutions);
    let newLineIndex = str.indexOf("\n");
    str = str.slice(newLineIndex + 1);
    newLineIndex = str.lastIndexOf("\n");
    return str.slice(newLineIndex + 1, -1);
}

const assert = eslintAssert(__dirname, "../src/ruleset.cjs.js");


test("importing multiple symbols at once requires imports to be sorted", t => {
    assert.inline(
        t,
        javascript `
import {
    one, two, three,
} from "./some-file.js";
import {
    four, five,
} from "./some-other-file.js";
import { six, } from "./yet-another-file.js";

console.log(one + two + three + four + five + six);
`
    );
});
