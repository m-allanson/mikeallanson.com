/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin.js";
import postcss from "postcss";
import postcssJs from "postcss-js";
import tailwindcssVariables from "@mertasan/tailwindcss-variables";

import { clampGenerator } from "./src/design-utils/clamp-generator.js";
import { tokensToTailwind } from "./src/design-utils/tokens-to-tailwind.js";

// Raw design tokens
import fontTokens from "./src/design-utils/tokens/fonts.json" assert { type: "json" };
import spacingTokens from "./src/design-utils/tokens/spacing.json" assert { type: "json" };
import textSizeTokens from "./src/design-utils/tokens/text-sizes.json" assert { type: "json" };

// Process design tokens
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

export default {
  content: ["./src/**/*.{astro,html,js,md,ts,tsx}"],
  experimental: {
    // This skips outputting some things that we don't need
    optimizeUniversalDefaults: true,
  },
  presets: [],
  darkMode: "media", // tailwindcss-variables plugin
  theme: {
    screens: {
      md: "50em",
      lg: "80em",
    },
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
        glare: "var(--color-primary-glare)",
      },
      secondary: "var(--color-secondary)",
      "highlight-primary": {
        DEFAULT: "var(--color-highligh-primary)",
        glare: "var(--color-highlight-primary-glare)",
      },
      "highlight-secondary": {
        DEFAULT: "var(--color-highlight-secondary)",
        glare: "var(--color-highlight-secondary-glare)",
      },
    },
    variables: {
      // tailwindcss-variables plugin
      DEFAULT: {
        color: {
          primary: {
            DEFAULT: "#F3F3F3",
            glare: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#404040",
            glare: "#525252",
          },
          "highlight-primary": {
            DEFAULT: "#FF707E",
            glare: "#FF8591",
          },
          "highlight-secondary": {
            DEFAULT: "#3DB8A5",
            glare: "#47C2AF",
          },
        },
      },
    },
    darkVariables: ({ theme }) => ({
      DEFAULT: {
        color: {
          ...theme("variables.DEFAULT.color"),
          primary: theme("variables.DEFAULT.color.secondary"),
          secondary: theme("variables.DEFAULT.color.primary"),
        },
      },
    }),
    spacing,
    fontSize,
    fontFamily,
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 800,
    },
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    padding: ({ theme }) => theme("spacing"),
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],

  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false,
  },
  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({ addBase, config }) {
      let result = "";

      const currentConfig = config();

      const groups = [
        { key: "spacing", prefix: "space" },
        { key: "fontSize", prefix: "size" },
        { key: "fontFamily", prefix: "font" },
      ];

      groups.forEach(({ key, prefix }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach((key) => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addBase({
        ":root": postcssJs.objectify(postcss.parse(result)),
      });
    }),

    // Generates custom utility classes
    plugin(function ({ addUtilities, config }) {
      const currentConfig = config();
      const customUtilities = [
        { key: "spacing", prefix: "flow-space", property: "--flow-space" },
      ];

      customUtilities.forEach(({ key, prefix, property }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach((key) => {
          // console.log({
          //   [`.${prefix}-${key}`]: postcssJs.objectify(
          //     postcss.parse(`${property}: ${group[key]}`)
          //   ),
          // });
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            ),
          });
        });
      });
    }),
    tailwindcssVariables,
  ],
};
