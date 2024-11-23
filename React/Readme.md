# React

React is a JavaScript library for building user interfaces.It uses component based architecture.It is declarative.

## Creating React Project

To start with, I highly recommend one approach, and that's using the officially recommended tool called create-react-app .
create-react-app is a command line application, aimed at getting you up to speed with React in no time

You start by using npx , which is an easy way to download and execute Node.js commands without installing them.
npx comes with npm (since version 5.2) and if you don't have npm installed already, do it now from nodejs.org (npm is installed with Node).
When you run npx create-react-app app-name , the most recent create-react-app npx is going to download release, run it, and then remove it from your system. This is great because you will never have an outdated version on your system, and every time you run it, you're getting the latest and greatest code available.

```bash
npx create-react-app <app-name>
```

Using Vite

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
