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
  },
};
