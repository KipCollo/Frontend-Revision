# React

React is a JavaScript library for building user interfaces.It uses component based architecture.It is declarative.Built by facebook.
React.js is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when the data changes.

## Creating React Project

- **create-react-app**:-

create-react-app is a command line application, aimed at getting you up to speed with React in no time

You start by using npx , which is an easy way to download and execute Node.js commands without installing them.
npx comes with npm (since version 5.2) and if you don't have npm installed already, do it now from nodejs.org (npm is installed with Node).
When you run npx create-react-app app-name , the most recent create-react-app npx is going to download release, run it, and then remove it from your system. This is great because you will never have an outdated version on your system, and every time you run it, you're getting the latest and greatest code available.

```bash
npx create-react-app <app-name>

npm install -g create-react-app
create-react-app <app-name>
```

create-react-app can get quite laggy as your application grows as it uses Webpack under the hood.

- **Using Vite**:- Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

1. A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite has a React plugin,which makes it great replacement of create-react-app for faster experience.

```bash
npm create vite@latest <app-name>
```

Manual Installation- In your project, you can install the vite CLI using:

```bash
npm install -g vite

npx vite
```

The index.html will be served on <http://localhost:5173.>
Running vite starts the dev server using the current working directory as root. You can specify an alternative root with vite serve some/sub/dir. Note that Vite will also resolve its config file (i.e. vite.config.js) inside the project root, so you'll need to move it if the root is changed.
When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root (other JS and TS extensions are also supported).

```js
//vite.config.js
export default defineConfig{
  // config options
  plugins: [react()],
  server: {
    port: 3000
  }
}
```

You can also explicitly specify a config file to use with the --config CLI option (resolved relative to cwd):

```bash
vite --config my-config.js
```

CONFIG LOADING:- By default, Vite uses esbuild to bundle the config into a temporary file and load it. This may cause issues when importing TypeScript files in a monorepo. If you encounter any issues with this approach, you can specify --configLoader runner to use the module runner instead, which will not create a temporary config and will transform any files on the fly. Note that module runner doesn't support CJS in config files, but external CJS packages should work as usual.

Alternatively, if you're using an environment that supports TypeScript (e.g. node --experimental-strip-types), or if you're only writing plain JavaScript, you can specify --configLoader native to use the environment's native runtime to load the config file. Note that updates to modules imported by the config file are not detected and hence would not auto-restart the Vite server.

In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite. Here are the default npm scripts in a scaffolded Vite project:

```json
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
} 
```

## CLI Tools

Here is the list of most common CLI tools for React development:

1. [@article@create-react-app](https://create-react-app.dev)
2. [@article@vite](https://vitejs.dev)

- Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

- Create React App is the CLI based tool and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine.

1. Objects: Collections of key value pairs.

```js

const Person = {
    name: "Collo",
    walk: function(){},
    talk(){}
};

Person.talk()
```

## Components

Functional components are stateless and are typically written as plain JavaScript functions. They are simpler and easier to test. Class components, on the other hand,have a state, can use lifecycle methods, and are written as ES6 classes.

```js
import React from "react"//compiles jsx to plain js
import ReactDOM from "react-dom"//renders element in the DOM

const element = <h1>Hello World</h1>
ReactDOM.render(element,document.getElementById("root"));//element is referenced in a div inside index.html
```
