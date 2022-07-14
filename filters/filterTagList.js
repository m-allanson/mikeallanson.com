module.exports = (tags) => {
  return (tags || []).filter(
    (tag) => ["all", "nav", "note", "notes"].indexOf(tag) === -1
  );
};
