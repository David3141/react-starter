# SiReSPo - Simplest React Starter Possible

A simple, yet powerful React starter that is easy to follow and packed with up-to-date packages for modern React web development:

- **react**
- **jest** + **@testing-library/react**
- **webpack 4** (support for babel + sass)
- **express** (support for hot module replacement)

Its purpose is to be simple and compact while still providing a complete toolkit for fast and easy React development.
The idea was not only to serve as a boilerplate, but also as an easy to follow, complete React environment for advanced beginners.

## Setup

1. `git clone git@github.com:David3141/react-starter.git your-project-name && cd $_`
2. `npm install`
3. `rm -rf .git && git init && git add . && git commit -m "Initial commit"`

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
• package-lock.json
• package.json
• README.md
• webpack.config.js
```

## Scripts

| npm script         | description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `npm start`        | starts an `express` server in `development` mode with HMR support                          |
| `npm test`         | runs tests _(files matching \*.spec.js or \*.test.js)_ in jest's interactive mode          |
| `npm run prod`     | compiles the project's source to `/dist` and starts an express server in `production` mode |
| `npm run lint`     | lints project via eslint _(effectively only `/src`, have a look at .eslintignore)_         |
| `npm run lint:fix` | behaves like `lint` but fixes simple errors                                                |
| `npm run compile`  | builds the project into `/dist`                                                            |
