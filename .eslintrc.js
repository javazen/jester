module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "math": "readonly"
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2018
    },
    "rules": {
      "no-unused-vars": ["error", { "args": "none" }]
    }
};
