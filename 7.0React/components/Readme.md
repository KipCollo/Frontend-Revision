# Components

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.Every React app has on root component called *App*.This component rep the entire application and contains other child components.

Use React snippets to help in development of components
Components can either be created using the class based approach or a functional approach.

## Class Components

These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.These components are JavaScript Classes that extends React Component and have their own state and lifecycle methods.

Although the class components are supported in React, it is encouraged to write functional components and make use of hooks in modern React applications.

```jsx
class ClassName extends Component{
    state={};
    render(){
        return (<h1></h1>)
    }
}

export default ClassName;
```

TODO More on Lists and unique keys in lists

- Rendering Lits in React:-

```jsx
state={
    tags:["tag1","tag2","tag3"]
};
render(){
    return (<
    <ul>
    {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
     </ul>)
 }
```

- Conditional Rendering:-

```jsx
state={
    tags:["tag1","tag2","tag3"]
};

renderItems(){
    if(this.state.tags.length==0) return <p>No Items</p>
    else return <ul>{this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</ul>
}
render(){
    return (<
    <div>{this.renderItems()}</div>)
 }
```

## Functional Components

Functional components are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components can also have state which is managed using React hooks.

```jsx
function FunctionName(){
    return (<h1></h1>)
}

export default FunctionName;

const FunctionName = () => <h1></h1>
```

## JSX

JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

## Props vs State

Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of component render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

## Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to create elements representing the current state, and let React update the UI to match them.

## Composition vs Inheritance

React has a powerful composition model, and it is recommended to use composition instead of inheritance to reuse code between components.
