module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2022,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
    "jsx-a11y"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  }
};
