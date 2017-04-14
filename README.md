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
- `yarn install`

## Folder Structure
The project's source code lies in `/src`. Compiling creates a (`.gitignore`'d) `/bin` folder that contains
the compiled `.html` + `.js` files. _(Do not use for development, web-dev-server takes care of compiling
and browser reloading!)_

## Development
- `yarn dev`

This starts webpack-dev-server on port 8080 with hot-module-replacement (via `react-hot-loader`).

## Compiling
- `yarn compile` or `yarn compile-production`

## TODO
- add testig framework
