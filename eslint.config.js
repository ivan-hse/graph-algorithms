import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const sortingConfig = [
  "error",
  {
    type: "unsorted",
    groups: [
      ["required-property", "required-index-signature"],
      ["optional-property", "optional-index-signature"],
      "method",
    ],
  },
];

export default [
  globalIgnores(["dist", "node_modules"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/*.{ts,tsx,js,mjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      camelcase: ["error", { properties: "always" }],
      "dot-notation": "error",
      eqeqeq: "error",
      "no-await-in-loop": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-inline-comments": "error",
      "no-magic-numbers": [
        "error",
        {
          ignore: [-1, 0, 1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
        },
      ],
      "no-unneeded-ternary": "error",
      "no-use-before-define": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      yoda: "error",
    },
  },
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [
            {
              groupName: "react",
              elementNamePattern: ["^react$", "^react-.+"],
            },
          ],
          groups: [
            "react",
            ["side-effect-style", "style"],
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            "unknown",
          ],
          sortSideEffects: true,
        },
      ],
      "perfectionist/sort-interfaces": sortingConfig,
      "perfectionist/sort-object-types": sortingConfig,
    },
  },
];
