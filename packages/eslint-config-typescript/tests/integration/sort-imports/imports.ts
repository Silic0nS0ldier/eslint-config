import {
    longVarName, medium, short,
} from "./afile1.js";
import AnotherVar from "./bfile1.js";
import Eslint from "eslint";
import { one, } from "./bfile2.js";
import someVar from "./afile2.js";

console.log(
    short + medium + longVarName + someVar + AnotherVar
    + one + Eslint
);