import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": ["error", {
        // Povolí 'any' v catch blocích (pro err: unknown)
        "allowCatchClauses": true,
        // Povolí 'any' v parametrech funkcí (pro isCancel(err: any))
        "fixme": "off",
        "ignoreRestArgs": true,
        "ignoreArgumentCasting": true,
        "ignoreArguments": true,
      }],
    }
  },
  {},

]);
