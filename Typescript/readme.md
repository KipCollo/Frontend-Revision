# Fundamentals

Typescript is a superset of Javascript.It supports strong typing, object-oriented features and compile-time errors detection & offers great tooling.

Browsers doesn't understand Javascript.It is transpiled(compiled) to javascript

  Typescript ----------------->Javascript

- Type annotations
- Arrow functions
- Interfaces
- Classes
- Modules
- Access Modifiers

## Installing Typescript

To install the TypeScript Compiler tsc globally. You can use npx or similar tools if you’d prefer to run tsc from a local node_modules package instead.

```js
npm install -g typescript
```

To check if it's installed use the command:

```ts
tsc --version
```

To transpile file from js to ts, use the command:

```ts
tsc <filename.ts>
```

However it's transpiled under the hood in frameworks.
