# gatsby-storybook-css-modules

# UPDATE

This example is for use with Gatsby v1. If you're using Gatsby v2 you should refer to [Gatsby's docs on using Storybook with Gatsby](https://www.gatsbyjs.org/docs/visual-testing-with-storybook/).

## About
An example of using [Gatsby](https://www.gatsbyjs.org) with [Storybook](https://storybook.js.org/) and [CSS Modules](https://github.com/css-modules/css-modules). Based on Gatsby's default starter.

Storybook is configured to match Gatsby's CSS Modules and cssnext setup. This means that CSS files that end with `.module.css` will be processed as CSS Modules, while all other CSS files will be processed as standard CSS.

## Requirements

Built with:

- NodeJs v8.5.0 or above
- [Yarn](https://github.com/yarnpkg/yarn) v1.1.0 or above

> Note: You _must_ use Yarn instead of npm, due to usage of Yarn's alias feature to configure Storybook's dependencies. See https://twitter.com/sebmck/status/873958247304232961?lang=en.

## Getting started

- `yarn`
- `yarn run develop`
- In a different terminal: `yarn run storybook`

Now you can browse to the Gatsby site and the Storybook on your local machine.

## Further info

This config is a little unusual as Gatsby uses webpack version 1, whereas Storybook uses webpack version 3. This means that the versions of the postcss tools used in Gatsby's webpack config won't run correctly in Storybook's webpack config.

To work around this, Yarn's [alias feature](https://twitter.com/sebmck/status/873958247304232961?lang=en) is used to install newer versions of these tools for Storybook to use, without overriding the older versions used by Gatsby. Note the following in `package.json`'s dependencies:

```
    "postcss-cssnext-3": "npm:postcss-cssnext@3",
    "postcss-import-11": "npm:postcss-import@11",
    "postcss-loader-2": "npm:postcss-loader@2",
```

This allows Storybook to use these tools in `storybook/webpack.config.js`, as `postcss-loader-2`, `postcss-import-11` and `postcss-cssnext-3`

> Beware of using cssnext features that are available in cssnext v3 (used in Storybook) and cssnext v2.8 (used in Gatsby).

