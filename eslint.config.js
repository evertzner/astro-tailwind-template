import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'], // Specify Astro files
    plugins: {
      astro: eslintPluginAstro // Register the Astro plugin
    },
    rules: {
      // Add any Astro-specific rules here
      'astro/no-set-html-directive': 'error'
    },
    settings: {
      astro: {
        root: true // Add Astro settings if necessary
      }
    }
  }
];
