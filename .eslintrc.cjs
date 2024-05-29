module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Add TypeScript rules
  ],
  parser: "@typescript-eslint/parser", // Specify the TypeScript parser
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "@typescript-eslint" // Add TypeScript plugin
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    // Add or override TypeScript-specific rules here
  },
};

