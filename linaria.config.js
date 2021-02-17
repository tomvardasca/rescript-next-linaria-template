let i = 0;
module.exports = {
  classNameSlug: (hash, title) => (process.env.NODE_ENV === "test" ? `${title}_${i++}` : `${hash}`),
};
