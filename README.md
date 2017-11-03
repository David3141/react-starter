# SiReSPo - Simplest React Starter Possible

This project is set up using `yarn`, though `npm` will work as well, just replace
`"yarn"` with `"npm"` (or `"npm run"` for running scripts) in the commands below (if you want to use npm, you can delete `yarn.lock` if you feel like it).

Following dependencies are used:

- react
- react-hot-loader
- webpack + html-webpack-plugin
- babel
- sass
- express + webpack-dev-middleware + webpack-hot-middleware

## Setup
- `git clone git@github.com:David3141/react-starter.git your-project-name`
- `cd your-project-name`
- `yarn install`

## Folder Structure
```
– src                : client code
  └ index.js         : root point for react app
  └ index.html       : html page containing root div
  └ components       : folder for react components
    └ App.js         : an example component
    └ App.js         : example component's style
– server             : server code
  └ main.js          : simple express server with HMR
– public             : (compiled source, used by webpack)

// Additional config files etc.
- .babelrc           : babel config
- .editorconfig      : editorconfig file (http://editorconfig.org/)
- .eslintignore      : files not to lint
- .eslintrc.json
- .gitignore
- package.json
- README.md
- webpack.config.js
- yarn.lock
```
## Scripts
- `yarn dev` starts an `express` server in `development` mode with dev+hmr webpack middleware
- `yarn prod` compiles the project's source to `/public` and starts an express server in `production` mode
- `yarn lint` lints the code via eslint (effectively `/src`, have a look at .eslintignore)
- `yarn lint:fix` behaves like `lint` but fixes simple errors
- `yarn compile` builds the project

## TODO
- add testig framework
