import eslint = require("eslint");

const config: eslint.Linter.Config & { extends: string[], plugins: string[] } = {
    extends: [ "@silicon-soldier/eslint-config", ],
    parser: "@typescript-eslint/parser",
    plugins: [ "@typescript-eslint/eslint-plugin", ],
};

module.exports = config;
