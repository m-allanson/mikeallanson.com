const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");
const postcssJs = require("postcss-js");

const clampGenerator = require("./design-utils/clamp-generator.js");
const tokensToTailwind = require("./design-utils/tokens-to-tailwind.js");

// Raw design tokens
const fontTokens = require("./design-utils/tokens/fonts.json");
const spacingTokens = require("./design-utils/tokens/spacing.json");
const textSizeTokens = require("./design-utils/tokens/text-sizes.json");

// Process design tokens
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

module.exports = {
  content: ["./src/**/*.{html,js,jsx,mdx,njk,twig,vue}"],
  experimental: {
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
          console.log({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            ),
          });
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            ),
          });
        });
      });
    }),
    require("@mertasan/tailwindcss-variables"),
  ],
};
