# SiReSPo - Simplest React Starter Possible

This project is set up using `yarn`, though `npm` will work as well, just replace
`"yarn"` with `"npm"` in the commands below (you can delete `yarn.lock` if you feel like it).

Following dependencies are used:

- react (who would have thought)
- react-hot-loader
- webpack + html-webpack-plugin
- babel stuff for webpack
- sass stuff for webpack
- webpack-dev-server

## Setup
- `git clone git@github.com:David3141/react-starter.git`
- (`mv react-starter <your-project-name>`)
- `cd <your-project-name>`
- `yarn install`

## Folder Structure
The project's source code lies in `/src`. Compiling creates a (git-ignored) `/bin` folder that contains
the compiled `.html` + `.js` files.

## Development
- `yarn dev`

This starts webpack-dev-server on port 8080 with hot-module-replacement (via `react-hot-loader`).

## Compiling
- `yarn compile` or `yarn compile-production`

They create `/bin/index_bundle.js` + `/bin/index.html`. `yarn compile` uses `webpack`, `yarn compile-production` uses `webpack -p`, which minifies the JS-file.

## TODO
- add testig framework
