import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules/', 'dist/', '*.js'],
  },
  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      "no-unexpected-multiline": "error",
      "quotes": "off", // Отключаем правило ESLint, так как Prettier управляет кавычками
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/exhaustive-deps": "off",
      "prettier/prettier": "error" // Включаем правило Prettier
    },
  },
  prettier,
);