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
- `src`    : client code (-> react)
- `server` : server code
- `public` : (compiled source, used by webpack)
```
## Scripts
### Development
- `yarn dev` starts an `express` server in `development` mode with dev+hmr webpack middleware
- `yarn prod` compiles the project's source to `/public` and starts an express server in `production` mode
- `yarn lint` lints the code in `/src` (with eslint)
- `yarn lint:fix` lints the code in `/src` and fixes easy errors

## TODO
- add testig framework
