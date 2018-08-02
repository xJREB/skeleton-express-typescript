# Expres.js Typescript RESTful API Skeleton Project

> A skeleton project for a RESTful web service with Express.js, TypeScript, Mocha, and Chai.

## Structure

- `src/index.ts`: entry file for the app that starts of express server
- `src/App.ts`: express app class where middleware is configured
- `src/routes/`: directory for all routes; all `*.routes.ts` files in here are automatically included by `index.ts` and injected into `App.ts`.
- `src/config/config.ts`: configuration file with app or environment specific properties
- `test/`: directory for all tests

## Build Setup

``` bash
# install dependencies
npm install

# serve locally with hot reload on localhost:3000 (adjustable in `src/config/config.ts` or with ENV variable `PORT`)
npm start

# build node.js version for production
npm run build

# start created production build
npm run prod

# run TypeScript linter
npm run lint

# run tests
npm test
```

## Useful VSCode Extensions

- TSLint (enforces coding rules in `tslint.json`)
- EditorConfig (enforces code formatting in `.editorconfig`)
