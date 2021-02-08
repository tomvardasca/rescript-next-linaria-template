module.exports = {
  collectCoverageFrom: ["**/*.{js}", "!**/node_modules/**"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  testMatch: ["<rootDir>/lib/js/**/*_test.js"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  snapshotResolver: './config/jest/snapshotResolver.js',
  transformIgnorePatterns: [
    "node_modules",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^react$": '<rootDir>/node_modules/react',
    "^react-dom$": '<rootDir>/node_modules/react-dom'
  },
};
