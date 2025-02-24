import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    {
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
];
