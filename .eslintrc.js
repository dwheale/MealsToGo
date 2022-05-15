require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  "extends": ['@growflow', '@react-native-community'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: false,
          snakeCase: false,
        },
      },
    ],
    'react/style-prop-object': [
      'error',
      {
        "allow": ['ExpoStatusBar', 'StatusBar'],
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-continue': 'off',
  },
};
