const withPlugins = require('next-compose-plugins');
const StylelintPlugin = require('stylelint-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const bsconfig = require('./bsconfig.json');
const transpileModules = ["bs-platform"].concat(bsconfig["bs-dependencies"]);
const withTM = require("next-transpile-modules")(transpileModules, { debug: true });
  
const LINARIA_EXTENSION = '.linaria.module.css';

function traverse(rules) {
  for (let rule of rules) {
    if (typeof rule.loader === 'string' && rule.loader.includes('css-loader')) {
      if (
        rule.options &&
        rule.options.modules &&
        typeof rule.options.modules.getLocalIdent === 'function'
      ) {
        let nextGetLocalIdent = rule.options.modules.getLocalIdent;
        rule.options.modules.getLocalIdent = (context, _, exportName, options) => {
          if (context.resourcePath.includes(LINARIA_EXTENSION)) {
            return exportName;
          }
          return nextGetLocalIdent(context, _, exportName, options);
        };
      }
    }
    if (typeof rule.use === 'object') {
      traverse(Array.isArray(rule.use) ? rule.use : [rule.use]);
    }
    if (Array.isArray(rule.oneOf)) {
      traverse(rule.oneOf);
    }
  }
}

const config = {
  target: "serverless",
  pageExtensions: ["jsx", "js"],
  transpileModules: ["bs-platform"].concat(bsconfig["bs-dependencies"]),
  compress: true,
  reactStrictMode: true,
  env: {
    ENV: process.env.NODE_ENV,
  },
  webpack: (config, options) => {
    const { isServer } = options;

    if (!isServer) {
      // We shim fs for things like the blog slugs component
      // where we need fs access in the server-side part
      config.node = {
        fs: 'empty'
      }
    }

    traverse(config.module.rules);
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
            extension: LINARIA_EXTENSION,
          },
        },
      ],
    });

    config.plugins.push(new StylelintPlugin({
      files: 'src/**/*.js'}))

    return config;
  }
};

module.exports = withPlugins([withTM, withBundleAnalyzer], config);
