# React

React is a JavaScript library for building user interfaces.It uses component based architecture.It is declarative.Built by facebook.It allows developers to create reusable UI components and efficiently update the UI when the data changes.

React.js is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when the data changes.

## Key Features of React.js

- Virtual DOM:- React uses a Virtual DOM, a lightweight replica of the browser's DOM, which enables fast and efficient rendering.
- Reusable Components:- Components in React enable developers to create reusable interfaces, which can be easily modified and reused throughout the application.
- Unidirectional Data flow:- React features a unidirectional data flow, which makes it easier to debug and understand the application’s data flow.
- JSX Syntax:- React uses JSX - JavaScript syntax extension, which enables the creation of component hierarchies in a readable and streamlined way.

The virtual DOM is a lightweight copy of the actual DOM. React uses the virtual DOM to optimize and speed up the process of updating the real DOM by comparing the current virtual DOM with the previous one.

## How React.js Compares to Other Frameworks

- React vs Angular:-Angular is based on MVC pattern while React uses an MVVM pattern.
- React vs jQuery:- React is full-fledged frontend library,whereas jQuery is a library that focuses on DOM manipulation and event handling.

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

The constructor is used to initialize the state and bind event handlers in a class component. It is called before the component is mounted.

keys in React lists - Keys are used to give a unique identity to each element in a list of components. They help React efficiently update and re-render the components by identifying which items have changed, been added, or removed.

`Context` provides a way to pass data through the component tree without having to pass props manually at every level. It is used for sharing data that can be considered "global" for a tree of React components.

## React versions

✅ React 0.3 – 0.14 (2013–2015)

Initial Release & Core Concepts

    JSX: JavaScript syntax extension for describing UI (HTML-like in JS).

    Components: Reusable, stateful UI elements.

    Virtual DOM: Efficient UI updates.

    Unidirectional Data Flow: Props from parent → child.

    ReactDOM.render() introduced for mounting.

React 0.14 (2015)

    Split: react (core) and react-dom (DOM rendering).

    Stateless Functional Components introduced.

    PureComponent introduced for performance optimization.

⚛️ React 15 (2016)

    Custom DOM Attributes: Non-standard attributes are passed to the DOM (e.g., data-*, aria-*).

    Improved SVG Support

    Development & Production Builds separated.

🧬 React 16 (2017) – “Fiber”

    New Core Architecture (Fiber): Enables async rendering.

    Fragments: Return multiple elements (<> </>) without a parent div.

    Error Boundaries: Catch errors in component trees.

    Portals: Render children outside the parent DOM hierarchy.

    render() can return strings, arrays, and booleans.

🧩 React 16.8 (2019) – Hooks

    Hooks API introduced:

        useState, useEffect, useContext, useReducer, etc.

    Replaces many class component patterns with functional approaches.

    Makes logic reuse easier without HOCs or render props.

🔄 React 17 (2020) – No New Features

    Focused on:

        Gradual upgrades

        Improved event delegation to root instead of document

    New JSX Transform: No need to import React in every file.

⚡ React 18 (2022) – Concurrent Features

    Automatic Batching of state updates.

    createRoot() API replaces ReactDOM.render() for concurrent rendering.

    useTransition, useDeferredValue for smooth interactions.

    Suspense for Data Fetching support expanded.

    Streaming SSR with support for selective hydration.

🔬 React 19 (RC as of 2024)

    New use() hook for async/await in components (Suspense-first APIs).

    New Form Features: useFormStatus, useFormState

    Actions API: For server mutations.

    React Compiler (experimental): Automatic memoization and optimization.

    Improved Server Components Support

React Native is a framework for building native mobile applications using React. It
allows developers to write mobile apps using JavaScript and leverage the power of
React to create reusable UI components.

React is a JavaScript library for building user interfaces, primarily for web
applications, while React Native is a framework for building native mobile
applications. React Native uses native components and APIs specific to each
platform.

React Native components are similar to React components but are built specifically
for mobile app development. They include components for handling user input,
displaying data, navigating between screens, and more.

StyleSheet is a built-in component in React Native that allows you to define styles for
your components. It provides a way to write styles using JavaScript objects or create
reusable style constants.

The difference between state and props in React Native is the same as in React.js.
State is managed within a component and can be changed, while propsare passed
to a component from its parent and cannot be modified directly by the component
receiving them.

AsyncStorage is a simple, asynchronous, persistent key-value storage system
provided by React Native. It allows you to store data on the device's disk and retrieve
it later, making it useful for caching data or storing user preferences.

Expo is a set of tools, libraries, and services built on top of React Native. It provides a
simplified development workflow, pre-configured native modules, and access to
device features, allowing developers to build and deploy React Native apps faster.

React DevTools is a browser extension that allows you to inspect and debug React
component hierarchies. It provides a set of tools for inspecting components,
examining props and state, and profiling performance.

React Fragments allow you to group multiple elements without adding an extra node
to the DOM. They are useful when you need to return multiple elements from a
component's render method without introducing unnecessary wrapping elements.

React.memo() is a higher-order component that memoizes the rendering of a
functional component, similar to the shouldComponentUpdate() lifecycle method for
class components. It prevents unnecessary re-renders of the component if its props
have not changed.

A controlled component is a component where form data is handled by React stateand is fully controlled by React. An uncontrolled component, on the other hand,
manages its own stateand stores form data internally without relying on React state.

Error boundaries are React components that catch JavaScript errors during
rendering, in lifecycle methods, and in constructors of their child component tree.
They help to prevent the entire application from crashing and allow for graceful error
handling.

React.StrictMode is a component that helps highlight potential problems in an
application. It enables additional checks and warnings in the development mode to
help identify and address potential bugs and deprecated features.

React.Fragment is a built-in component in React that allows you to group multiple
elements without adding an extra node to the DOM. It is useful when you need to
return multiple elements from a component's render method without introducing
unnecessary wrapping elements.
