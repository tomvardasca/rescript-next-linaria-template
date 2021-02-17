const path = require("path");

module.exports = {
  resolveSnapshotPath: (testPath) => path.join(
      path.join(path.dirname(testPath).replace(["lib", "js", ""].join(path.sep), "")),
      path.basename(testPath) + ".snap",
    ),

  resolveTestPath: (snapshotPath) => path
      .join(path.dirname(snapshotPath), path.basename(snapshotPath).replace(".snap", ""))
      .replace(["src", "__tests__"].join(path.sep), ["lib", "js", "src", "__tests__"].join(path.sep)),

  testPathForConsistencyCheck: path.join("lib", "js", "src", "__tests__", "example_test.js"),
};
