const path = require('path');

module.exports = {
    resolveSnapshotPath: (testPath) => path.join(
        path.join(path.dirname(testPath).replace('/lib/js', '')),
        path.basename(testPath) + '.snap',
      ),

    resolveTestPath: (snapshotPath) => path.resolve(
        '/lib/js/' + path.dirname(snapshotPath),
        path.basename(snapshotPath).replace('.snap', ''),
      ),

    testPathForConsistencyCheck: path.posix.join(
      '/lib/js/',
      'src',
      'example_test.js',
    ),
  }
