# Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

JavaScript modules rely on the import and export statements.

## Export
You can export a function or variable from any file.

Let us create a file named person.js, and fill it with the things we want to export.

There are two types of exports: Named and Default.

### Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.

- In-line individually:

```js
export const name = "Jesse";
export const age = 40;
```
- All at once at the bottom:

```js
const name = "Jesse";
const age = 40;

export {name, age};
```
### Default Exports

You can only have one default export in a file.

Example
```js
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```
