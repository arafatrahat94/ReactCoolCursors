import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from "rollup-plugin-postcss";
// import { uglify } from "rollup-plugin-uglify";
// import uglify from "@lopatnov/rollup-plugin-uglify";
// const packageJson = require('./package.json')

export default [
  {
    input: "index.ts", // Corrected the entry file to index.js
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    external: ["react", "react-dom"],

    plugins: [
      typescript({ tsconfig: "tsconfig.json" }),
      peerDepsExternal(),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),

      commonjs(),
      terser(),
      postcss({
        plugins: [],
        minimize: true,
        extract: "style.css",
      }),
      babel({
        // presets: ["@babel/preset-env", "@babel/preset-react"],
        // extensions: ['.js', '.jsx']
        configFile: "./.babelrc",
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      // uglify()
    ],
  },
];
