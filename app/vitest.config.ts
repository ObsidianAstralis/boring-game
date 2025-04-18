import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'junit'],
    outputFile: 'test-results.xml', // this will appear in ./app/ if test runs from ./app
  },
});