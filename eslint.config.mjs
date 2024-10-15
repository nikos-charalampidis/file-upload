import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
        "no-unused-vars": "error",
        "no-undef": "error"
    }
},
  pluginJs.configs.recommended,
];