SETUP INSTALATION
```
pnpm create vite
✔ Project name: … UI
✔ Package name: … ui
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Done. Now run:

  cd UI
  pnpm install
  pnpm run dev

Create .npmrc to auto install peer dependencies

auto-install-peers=true

# ESLint
```
pnpm add -D eslint
pnpm dlx eslint --init
```
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · 4
✔ What quotes do you use for strings? · single
✔ What line endings do you use? · unix
✔ Do you require semicolons? ·  Yes
✔ Would you like to install them now?  Yes
✔ Which package manager do you want to use? · pnpm

## AirBNB Code Styling Guide

https://www.npmjs.com/package/eslint-config-airbnb

```
pnpm add -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb
```
EDIT - .eslintrc.cjs

```
module.exports = {
  ...
  "extends": [
        //Remove 
      [-] "eslint:recommended",

       // Add these lines
      "airbnb",
      "airbnb/hooks",
  ],
  ...
```

AirBNB ESLint TypeScript support
https://www.npmjs.com/package/eslint-config-airbnb-typescript
```
pnpm add -D eslint-config-airbnb-typescript
```

CREATE - tsconfig.eslint.json

```
{
  "include": [
    ".eslintrc.cjs",
    "tailwind.config.cjs",
    "vite.config.ts"
  ]
}
```

EDIT - .eslintrc.cjs

```
module.exports = {
  ...
  "extends": [
      "airbnb",
      "airbnb-typescript", // Add this 
      "airbnb/hooks",
  ],
  ...
  parserOptions: {
    ...
    project: ['./tsconfig.json', './tsconfig.eslint.json'], // Modify this line
  }
  ...
}
```

Path mapping for '@' to './src'
https://stackoverflow.com/questions/67835072/vue-3-on-vite-js-with-eslint-unable-to-resolve-path-to-module-eslintimport-no/68908814#68908814

```
pnpm add -D eslint-import-resolver-alias
```

EDIT - .eslintrc.cjs
```
module.exports = {
  ...
  // Add this lines
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ...
}
```

## ESLint rules

```
module.exports = {
  ...
  rules: {
    ...
    [-] semi: ['error', 'never'],

    // Add these lines
    indent: ['error', 2],
    'no-console': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    ...
  },
  ...
}
```

# Prettier

Install prettier
```
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
```