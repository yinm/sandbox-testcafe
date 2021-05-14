module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:testcafe/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["testcafe", "@typescript-eslint"],
  rules: {
    "no-undef": "warn",
  },
};
