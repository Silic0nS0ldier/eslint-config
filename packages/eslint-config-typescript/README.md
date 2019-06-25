# ESLint Config

This ESLint configuration targets TypeScript, building on the baseline configuration `@silicon-soldier/eslint-config`.

## Usage

A quick note, this ruleset is incapable of installing its own plugins due to [limitations](https://github.com/eslint/eslint/issues/3458) within current versions of ESLint. This will be addressed by ESLint 6 which will be supported in the first stable release of this configuration. In the meantime, any requirements are marked as peer dependencies and will need to be installed separately.

### 1. Install

```sh
npm i --save-dev @silicon-soldier/eslint-config-typescript
```

### 2. Configure

Create an ESLint config file called `.eslintrc.json` (or whichever extension you need/prefer).

```json
{
    "extends": "@silicon-soldier/eslint-config-typescript",
    "parserOptions": {
        "ecmaVersion": 2015
    }
}
```

Some things to note are;

- ECMA version is specified to ensure ESLint interprets source according to the correct spec version.
- ESLint may need to be explicitly told what files to lint.
- ESLint will not lint TypeScript files unless you tell it to include them `.ts` files. Use the `--ext` flag, or provide a glob that includes the file extension to get around this.

### 3. Integrate

ESLint isn't magic. To actually get value out, you'll need to integrate it with your projects existing tooling to maximise value. Some other recommendations are;

- Integrating with Git Hooks using [Husky](https://www.npmjs.com/package/husky), good for avoiding accidental commits of unlinted code.
- Including it in integration tests so that bad linting can be caught for every push/PR in a reliable fashion.
- Installing plugins for your IDE that will automatically lint what is being viewed, and overlay issues.
