import twColoursToCustomProperties, {
  hexToHSL,
} from "../src/utils/twColours/index.js";
import { strict as assert } from "assert";

console.log(twColoursToCustomProperties());

assert.deepEqual(hexToHSL("#000"), "hsl(0, 0%, 0%)", "Colours do not match");
assert.deepEqual(hexToHSL("#000000"), "hsl(0, 0%, 0%)", "Colours do not match");
assert.deepEqual(
  hexToHSL("#ffd500"),
  "hsl(50, 100%, 50%)",
  "Colours do not match"
);
assert.deepEqual(
  hexToHSL("#E0D185"),
  "hsl(50, 59.5%, 70%)",
  "Colours do not match"
);
