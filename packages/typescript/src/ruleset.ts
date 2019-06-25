import { Linter, } from "eslint";

const config: Linter.Config & { extends: string[], plugins: string[] } = {
    extends: [ "@silicon-soldier/eslint-config", ],
    parser: "@typescript-eslint/parser",
    plugins: [ "@typescript-eslint/eslint-plugin", ],
};

export default config;
