# SiReSPo - Simplest React Starter Possible

This project is set up using `yarn`, though `npm` will work as well, just replace
`"yarn"` with `"npm"` in the commands below and delete `yarn.lock` if you feel like it.

Following dependencies are used:

- react (who would have thought)
- webpack + html-webpack-plugin
- babel stuff for webpack
- sass stuff for webpack
- webpack-dev-server

## Setup
- `git clone git@github.com:David3141/react-starter.git`
- `yarn install`

## Folder Structure
The project's source code (_a.k.a._ react files) lies in `/src`. Compiling creates a `/bin` folder that contains
the compiled `.html` + `.js` files. _(Do not use for development, web-dev-server takes care of compiling
and browser reloading!)_

## Development
- `yarn dev`

This starts webpack-dev-server on port 8080.

## Compiling
- `yarn compile` or `yarn compile-production`

## TODO
- add testig framework
