// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module, {
    cache: false
})
module.exports = require("./eslint.js").default;