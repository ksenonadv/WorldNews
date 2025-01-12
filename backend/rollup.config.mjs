import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescriptPlugin from 'rollup-plugin-typescript2';
import packageJson from './package.json' assert { type: "json" };
import json from "@rollup/plugin-json";

export default {
  input: './src/app.ts',
  output: {
    file: './dist/index.mjs',
    format: 'es',
    inlineDynamicImports: true,
    strict: false,
    generatedCode: {
      arrowFunctions: true,
      constBindings: true,
      objectShorthand: true
    }
  },
  plugins: [
    nodeResolve({ extensions: ['.ts'], preferBuiltins: true }),
    commonjs(),
    json(),
    typescriptPlugin({
      check: false,
      tsconfig: 'tsconfig.json',
      browserslist: false
    })
  ],
  external: [
    ...Object.keys(packageJson.dependencies || {}),
  ]
};