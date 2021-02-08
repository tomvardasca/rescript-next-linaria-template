# ReScript / NextJS/ Linaria Starter

This is a NextJS based template with following setup:

- [linaria](https://linaria.dev/) config and [stylelint](https://stylelint.io/)
- ReScript linaria bindings from https://github.com/MinimaHQ/rescript-linaria
- [ReScript](https://rescript-lang.org) + React
- Added Jest through `@glennsl/bs-jest`and Testing Library trough `bs-dom-testing-library`
- Some ReScript Bindings for Next to get you started
- Pre-configured Dependencies: `rescript-react`

## Development

Run ReScript in dev mode:

```
yarn res:start
```

In another tab, run the Next dev server:

```
yarn dev
```

## Test production setup with Next

```
# Make sure to uncomment the `target` attribute in `now.json` first, before you run this:
yarn build
PORT=3001 yarn start
```

## Tips

### Don't be afraid to adapt your Next bindings

We ship some general bindings for `NextJS`, but we try to keep them simple. Some use-cases and APIs might not be reflected yet, so feel free to adapt the file as you see fit for your app.

As with every file fork, if you keep the changes git trackable, it's pretty straight-forward to pull in upstream changes later on.

### Filenames with special characters

ReScript > 8.3 now supports filenames with special characters: e.g. `pages/blog/[slug].res`.
If you can't upgrade yet, you can create a e.g. `pages/blog/[slug].js` file, a `re_pages/blog_slug.re` file and then reexport the React component within the `[slug].js` file.

We recommend upgrading to the newest ReScript (bs-platform) version as soon as possible to get the best experience for Next!

### Fast Refresh & ReScript

Make sure to create interface files (`.resi`) for each `page/*.res` file.

Fast Refresh requires you to **only export React components**, and it's easy to unintentionally export other values than that.

For the 100% "always-works-method", we recommend putting your ReScript components in e.g. the `src` directory, and re-export them in plain `pages/*.js` files instead (check out the templates initial `pages` directory to see how we forward our React components to make sure we fulfill the Fast-Refresh naming conventions).

## Q & A

### Why are the generated `.js` files tracked in git?

In ReScript, it's a good habit to keep track of the actual JS output the compiler emits. It allows quick sanity checking if we made any changes that actually have an impact on the resulting JS code (especially when doing major compiler upgrades, it's a good way to verify if production code will behave the same way as before the upgrade).

This will also make it easier for your Non-ReScript coworkers to read and understand the changes in Github PRs, and call you out when you are writing inefficient code.

If you completely disagree with this, you can delete the emitted `.js` files within the `src` directory and add `src/**/*.js` in your `.gitignore` of course.

### Credits

 - Based of [@ryyppy](https://github.com/ryyppy) [rescript-nextjs-template](https://github.com/ryyppy/rescript-nextjs-template/)
 - Linaria configuration from https://github.com/Mistereo/next-linaria using the NextJS plugin would not work