/* eslint-disable global-require */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import packageJSON from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJSON.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(packageJSON.dependencies || {}),
    ...Object.keys(packageJSON.peerDependencies || {}),
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require("typescript"),
    }),
    del({ targets: "dist" }),

    terser(),
  ],
};
