# Document

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.
```js
console.dir(document)
```
The Document interface describes the common properties and methods for any kind of document.

```js
document.title="Document" // sets the title of a page
```

## Accessing elements

To access elements in the DOM, you can use various methods provided by the document object. Here are some common methods:

1. getElementById()
This method returns the element that has the ID attribute with the specified value.

2. getElementsByClassName()
This method returns a live HTMLCollection of elements with the given class name.

3. getElementsByTagName()
This method returns a live HTMLCollection of elements with the given tag name.

4. querySelector()
This method returns the first element that matches a specified CSS selector.

5. querySelectorAll()
This method returns a static NodeList of all elements that match a specified CSS selector.

const elements = document.querySelectorAll('.myClassName');

```js
const element = document.getElementById('myElementId');
const elements = document.getElementsByClassName('myClassName');
const elements = document.getElementsByTagName('div');
const element = document.querySelector('.myClassName');
const elements = document.querySelectorAll('.myClassName');
```