# React

React is a JavaScript library forbuilding user interfaces

1. Objects: Collections of key value pairs.

```js

const Person = {
    name: "Collo",
    walk: function(){},
    talk(){}
};

Person.talk()
```

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
