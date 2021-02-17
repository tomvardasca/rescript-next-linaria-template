const path = require('path');

module.exports = {
    resolveSnapshotPath: (testPath) => path.join(
        path.join(path.dirname(testPath).replace('/lib/js', '')),
        path.basename(testPath) + '.snap',
      ),

    resolveTestPath: (snapshotPath) => path.join(
        path.dirname(snapshotPath),
        path.basename(snapshotPath).replace('.snap', ''),
      ),

    testPathForConsistencyCheck: path.join(
      'lib',
      'js',
      'src',
      '__tests__',
      'example_test.js',
    ),
  }
