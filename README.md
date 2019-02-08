# SiReSPo - Simplest React Starter Possible

A simple, yet powerful React starter that is easy to follow and packed with up-to-date packages for modern React web development:

- **react 16.8**
- **jest** + **react-testing-library**
- **webpack 4** (support for babel + sass)
- **express** (support for hot module replacement)

Its purpose is to be simple and compact while still providing a complete toolkit for fast and easy React development.
The idea was not only to serve as a boilerplate, but also as an easy to follow, complete React environment for advanced beginners.

This project is set up using `yarn`, though `npm` will work as well, just replace
`"yarn"` with `"npm"` (or `"npm run"` for running scripts) in the commands below.

## Setup

1. `git clone git@github.com:David3141/react-starter.git your-project-name`
2. `cd your-project-name`
3. `yarn install`
4. `rm -rf .git && git init && git add . && git commit -m "Initial commit"`

## Folder Structure

```
• src
  ├ index.js           : root point for react app
  ├ index.html         : html page containing root div
  ├ __mocks__          : mock files for jest
  └ components
    └ App              : example component folder
      ├ App.js
      ├ App.scss
      ├ App.spec.js
      ├ __snapshots__
      └ index.js
• server
  └ main.js            : simple express server with HMR (mainly for development)
• public               : public folder for favicon, images etc.
• dist                 : (compiled source, will be created by webpack)

// Additional files
• .babelrc             : babel config
• .eslintignore        : files not to lint
• .eslintrc.json       : eslint config
• .gitignore
• package.json
• README.md
• webpack.config.js
• yarn.lock
```

## Scripts

| npm script      | description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| `yarn dev`      | starts an `express` server in `development` mode with HMR support                          |
| `yarn prod`     | compiles the project's source to `/dist` and starts an express server in `production` mode |
| `yarn lint`     | lints project via eslint _(effectively only `/src`, have a look at .eslintignore)_         |
| `yarn lint:fix` | behaves like `lint` but fixes simple errors                                                |
| `yarn compile`  | builds the project into `/dist`                                                            |
| `yarn test`     | runs tests _(files matching \*.spec.js or \*.test.js)_ in jest's interactive mode          |
