import {
    longVarName, medium, short,
} from "./afile1.js";
import {
    one, two,
} from "./bfile2.js";
import anotherVar from "./bfile1.js";
import someVar from "./afile2.js";

console.log(short + medium + longVarName + someVar + anotherVar + one + two);
