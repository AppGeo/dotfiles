module.exports = {
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "brace-style": [2, "1tbs"],
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "no-console": 0,
    "no-shadow": 0,
    "no-use-before-define": [2, "nofunc"],
    "no-underscore-dangle": 0,
    "no-constant-condition": 0,
    "space-after-function-name": 0,
    "no-undef": 2,
    "camelcase": 0,
    "semi": ["error", "always"]
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "document": false,
    "XMLHttpRequest": false
  }
};
