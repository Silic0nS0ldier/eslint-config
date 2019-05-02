import {
    longVarName, medium, short,
} from "./afile1.js";
import {
    one, two,
} from "./bfile2.js";
import AnotherVar from "./bfile1.js";
import Eslint from "eslint";
import someVar from "./afile2.js";
import ZOtherImport from "esm";

console.log(
    short + medium + longVarName + someVar + AnotherVar
    + one + two + Eslint + ZOtherImport
);
