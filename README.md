# Miles
Playground with Nuxt, Vue3 , Ts &amp; Tailwind (using @apply for redability).

## Recommended IDE Setup

[VSCode] + [Vue-Official].

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Project Setup

```sh
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production
Build the application for production:

```bash
# npm
npm run build
```

## Preview

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test  #"vitest"
npm run coverage  #"vitest run --coverage"
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run e2e
npm run e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build

```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
