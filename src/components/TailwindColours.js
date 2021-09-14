import { h } from "preact";
import twColoursToCustomProperties from "../utils/twColours/index.js";

const TailwindColours = () => {
  const codeString = twColoursToCustomProperties();
  return <pre>{codeString}</pre>;
};

export default TailwindColours;
