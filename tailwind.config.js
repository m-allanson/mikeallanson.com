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
  theme: {
    screens: {
      md: "50em",
      lg: "80em",
    },
    colors: {
      dark: "var(--colors-dark)",
      light: {
        DEFAULT: "var(--colors-light)",
        glare: "var(--colors-light-glare)",
      },
      primary: {
        DEFAULT: "var(--colors-primary)",
        glare: "var(--colors-primary-glare)",
      },
      secondary: {
        DEFAULT: "var(--colors-secondary)",
        glare: "var(--colors-light)",
      },
    },
    variables: {
      DEFAULT: {
        color: {
          dark: "#404040",
          light: {
            DEFAULT: "#F3F3F3",
            glare: "#FFFFFF",
          },
          primary: {
            DEFAULT: "#EC4899",
            glare: "#FCE7F3",
          },
          secondary: {
            DEFAULT: "#06B6D4",
            glare: "#CFFAFE",
          },
        },
      },
    },
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
    plugin(function ({ addComponents, config }) {
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

      addComponents({
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
