module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "linebreak-style": ["error","windows"],
    "max-len": "off",
    "react/jsx-filename-extension": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

  },
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  }
};