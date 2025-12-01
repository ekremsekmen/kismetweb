import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Kod kalitesi kuralları
      "prefer-const": "error",
      "no-var": "error",
      "no-unused-expressions": "error",
      "no-duplicate-imports": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      
      // React/Next.js kuralları
      "react/jsx-no-useless-fragment": "warn",
      "react/self-closing-comp": "warn",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript kuralları
      "@typescript-eslint/no-unused-vars": ["error", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-as-const": "error",
      
      // Import/Export kuralları
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
