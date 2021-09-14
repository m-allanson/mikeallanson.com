import twColours from "./sourceColours.js";

/* eslint-disable prefer-template --- I think the string concat looks clearer here */

// Adapted from https://css-tricks.com/converting-color-spaces-in-javascript/
const hexToHSL = (H) => {
  if (H.length === 4 && H[0] === "#") {
    H = "#" + H[1] + H[1] + H[2] + H[2] + H[3] + H[3];
  }

  if (H[0] !== "#" || H.length !== 7) return H;

  // Convert hex to RGB first
  let r = parseInt(H[1] + H[2], 16);
  let g = parseInt(H[3] + H[4], 16);
  let b = parseInt(H[5] + H[6], 16);

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;

  let h, s, l;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsl(${h}, ${s}%, ${l}%)`;
};
/* eslint-enable prefer-template */

// from https://stackoverflow.com/a/63116134/517553
const kebabize = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

// Convert the hex colours to hsl values
function coloursToHSL(colourObj) {
  let mappedColours = {};

  for (const colour in colourObj) {
    if (typeof colourObj[colour] === "string") {
      mappedColours[colour] = hexToHSL(colourObj[colour]);
    } else {
      mappedColours[colour] = coloursToHSL(colourObj[colour]);
    }
  }

  return mappedColours;
}

function twColoursToCustomProperties() {
  let stack = [];
  let customProps = "";

  // Create a string listing all colours as CSS custom properties
  function coloursToCustomProps(colourObj) {
    for (const colour in colourObj) {
      if (typeof colourObj[colour] === "string") {
        const propertyName = [...stack, colour].join("-");
        const value = colourObj[colour];
        customProps += `--${propertyName}: ${value};\n`;
        // mappedColours[colour] = hexToHSL(colourObj[colour]);
      } else {
        stack.push(kebabize(colour));
        coloursToCustomProps(colourObj[colour]);
      }
    }
    stack.pop();
    return customProps;
  }

  const mapped = coloursToHSL(twColours);

  const properties = coloursToCustomProps(mapped);

  return properties;
}

export { hexToHSL };
export default twColoursToCustomProperties;
