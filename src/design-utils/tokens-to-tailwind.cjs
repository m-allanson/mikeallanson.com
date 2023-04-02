const slugger = require("github-slugger");

/**
 * Converts human readable tokens into tailwind config friendly ones
 *
 * @param {array} tokens {name: string, value: any}
 * @return {object} {key, value}
 */
const tokensToTailwind = (tokens) => {
  const nameSlug = (text) => slugger.slug(text);

  let response = {};

  tokens.forEach(({ name, value }) => {
    response[nameSlug(name)] = value;
  });

  return response;
};

module.exports = tokensToTailwind;