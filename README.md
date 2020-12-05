# Would You Rather

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e5d997e-cbfe-4cb1-97c6-6a6b828457c6/deploy-status)](https://app.netlify.com/sites/itchy-jango-fett/deploys)

For the live app [click here](https://itchy-jango-fett.netlify.app/auth/sign-in).

This project is a submission to the [React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019).

It is a web app inspired by the [Would you rather game](https://en.wikipedia.org/wiki/Would_you_rather).

As soon as you sing in, or sign up (no real credentials or passwords) you can:

- view or answer polls
- create new questions
- check the leader board

## Development

### Installing Dependencies

You will need [Node.js](https://nodejs.org/en/) (v12+) to start and build this project.

Also will need to run the following command in order to install the project's dependencies before running other commands:

```bash
npm install
```

### Running in Development Mode

To start the project simply run:

```bash
npm start
```

This will start a [webpack](https://webpack.js.org/) development server that will serve the built web app. It also includes hot-reloading for live updates when you save a file.

### Running Tests

```bash
npm test
```

This will start jest, which will run tests when tests changes or files that are being used for testing changes.

### Creating a Production Build

If you are on a _Unix_ based system, run:

```bash
NODE_ENV=production npm run build
```

If you are a _Windows_ user, open a [PowerShell](https://github.com/PowerShell/PowerShell) window and run:

```powershell
$env:NODE_ENV="production"; npm run build
```

> You can also set `NODE_ENV` as an environment variable in any way you would with any other variable, or you can also just omit it.
>
> Please note that if `NODE_ENV` is not set to `production`, some files will **not** be optimized.

## Theming

There are two themes available: light and dark. As you first enter the theme will be chosen according to your device settings by using `@media (prefers-color-scheme)`.

## Technologies

### React

Builds the view layer of the web app.

### React Router

Handles routing between pages and makes the web app a single page application.

### Redux

Store's the app's data and acts as it's single source of truth. Is also responsible for predictable state changes through actions.

### Redux Saga

A Redux middleware that will handle async actions as well as complex actions, acting as a process manager.
> [https://redux-saga.js.org/](https://redux-saga.js.org/)

### Tailwind.css

The CSS framework of the web app. It is a utility-first CSS framework.
> [https://tailwindcss.com/](https://tailwindcss.com/)

## Licence

This project is provided under the [MIT License](./LICENSE.md).
