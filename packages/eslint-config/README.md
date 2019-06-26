# ESLint Config

This ESLint configuration targets plain JavaScript, and is intended to be complemented with additional rulesets for suit projects using TypeScript, React, unit tests, etc.

### 1. Install

```sh
npm i --save-dev @silicon-soldier/eslint-config
```

### 2. Configure

Create an ESLint config file called `.eslintrc.json` (or whichever extension you need/prefer).

```json
{
    "extends": "@silicon-soldier/eslint-config",
    "parserOptions": {
        "ecmaVersion": 2015
    }
}
```

Some things to note are;

- ECMA version is specified to ensure ESLint interprets source according to the correct spec version.

### 3. Integrate

ESLint isn't magic. To actually get value out, you'll need to integrate it with your projects existing tooling to maximise value. Some other recommendations are;

- Integrating with Git Hooks using [Husky](https://www.npmjs.com/package/husky), good for avoiding accidental commits of unlinted code.
- Including it in integration tests so that bad linting can be caught for every push/PR in a reliable fashion.
- Installing plugins for your IDE that will automatically lint what is being viewed, and overlay issues.
