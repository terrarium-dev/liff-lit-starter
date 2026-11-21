import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import lit from 'eslint-plugin-lit';
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist/**', 'public/bundle.js*'],
  },
  {
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'error',
    },
  },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  security.configs.recommended,
  lit.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-restricted-properties': [
        'error',
        { property: 'innerHTML', message: 'Do not assign to innerHTML; use Lit template bindings, which escape values automatically.' },
        { property: 'outerHTML', message: 'Do not use outerHTML; use Lit template bindings instead.' },
        { property: 'insertAdjacentHTML', message: 'Do not use insertAdjacentHTML; use Lit template bindings instead.' },
        { object: 'document', property: 'write', message: 'Do not use document.write; render through Lit templates instead.' },
        { object: 'document', property: 'writeln', message: 'Do not use document.writeln; render through Lit templates instead.' },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'lit/directives/unsafe-html.js', message: 'Do not use unsafeHTML; it bypasses Lit escaping. Bind values in templates instead.' },
            { name: 'lit/directives/unsafe-svg.js', message: 'Do not use unsafeSVG; it bypasses Lit escaping. Bind values in templates instead.' },
            { name: 'lit/static-html.js', message: 'Do not use unsafeStatic; it injects raw strings into templates. Use regular template bindings.' },
          ],
        },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': true,
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
    },
  },
  {
    files: ['eslint.config.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
