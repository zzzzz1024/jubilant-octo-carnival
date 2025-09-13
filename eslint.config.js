import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImportX from 'eslint-plugin-import-x';
import { globalIgnores } from 'eslint/config';

export default [
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'handle-callback-err': 'off',
      'import-x/no-console': 'off',
      'import-x/no-cycle': 'error',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'import-x/no-unresolved': [2, { ignore: ['^http'] }],
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-floating-decimal': 'error',
      'no-lonely-if': 'error',
      'no-multi-spaces': 'error',
      'no-redeclare': 'off',
<<<<<<< HEAD
      'no-shadow': ['warn', { allow: ['err', 'resolve', 'reject'] }],
=======
      'no-shadow': 'off',
>>>>>>> 56aa0be436939e9e252dae49f7e3d86b2441513c
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      yoda: 'error',
    },
  },
  eslintConfigPrettier,
  globalIgnores(['dist/**', 'node_modules/**', 'tavern_helper/**', 'eslint.config.js', 'webpack.config.ts']),
];
