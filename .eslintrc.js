module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended", "prettier"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {},
  "ignorePatterns": ["dist/*"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};