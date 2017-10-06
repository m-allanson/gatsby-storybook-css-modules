require("imports-loader");

const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Find Storybook's default CSS processing rule
  const cssLoaderIndex = config.module.rules.findIndex(
    rule => rule.test.source === `\\.css$`
  );

  if (!Number.isInteger(cssLoaderIndex))
    throw new Error("Could not find Storybook's CSS loader");

  // Exclude CSS Modules from Storybook's standard CSS processing
  config.module.rules[cssLoaderIndex].exclude = /\.module\.css$/;

  // Add specific loader rule for CSS Modules
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      { loader: `style-loader` },
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[path]-[local]-[hash:base64:5]"
        }
      },
      {
        // Use newer versions of postcss tools
        loader: `postcss-loader-2`,
        options: {
          plugins: loader => [
            require("postcss-import-11")({ root: loader.resourcePath }),
            require("postcss-cssnext-3")()
          ]
        }
      }
    ],
    include: path.resolve(__dirname, "../src")
  });

  // ignore gatsby-link's global `__loader` variable
  config.module.rules.push({
    test: require.resolve("gatsby-link"),
    loaders: ["imports-loader?___loader=>{enqueue:function(){}}"]
  });

  return config;
};
