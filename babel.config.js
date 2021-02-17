let i = 0;
module.exports = {
  presets: [
    "next/babel",
    [
      "@linaria",
      {
        classNameSlug: (hash, title) => (process.env.NODE_ENV === "test" ? `${title}_${i++}` : `${hash}`),
      },
    ],
    "@babel/preset-env",
  ],
};
