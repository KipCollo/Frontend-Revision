# Hooks

Hooks were introduced in React 16.8 and they let us use React's features-like managing your component's state and or performing an after effect when certain changes occur in state(s) without writing a class.

Hooks are functions that allow you to use state and other React features without writing a class. They were introduced in React 16.8 to provide a simpler and more readable way to write React components.

Hooks have some rules: They must be used only at the top level of a function component, hooks mustbe called in the same order every time the component renders, and they cannot be called conditionally.

## Common Hooks

### useState Hook

`useState` hook is used to add and manage the state of a component in functional components. Calling `useState` returns an array with two elements: the current state value and a function to update the state.By calling the update function, the component can trigger a re-render with the updated state.

```js
const [state,setState] = useState(initialState);
```

- Usage:

1. Adding state to a component
2. Updating state based on previous state.
3. Updating objects and arrays in state
4. Avoiding recreating initial state
5. Resetting state with key
6. Storing info from previous renders

Example:

```js
import { useState } from 'react';

function MyComponent(){
   const [age ,setAge] = useState(21);
   const [name,setName]= useState("Collo");

}
```

- Parameters:

1. initialState:- The value you want the state to be initially.It can be value of any type,but there is special behaviour for functions.This argument is ignored after initial render.If you pass a function as initialState,it will be treated as an initializer function.It should be pure,shoud take no arguments and should return a value of any type.React will call your initializer function when initializing the component,and store its return value as the initial state.
2. Returns: useState returns an array with two values:The current state,which during first render it will match initialState you passed and set function that lets you update state to a diff value and trigger a re-render.

useState is a Hook,it's called only at the top level of your component or your own hooks.It can't be called inside loops or conditions,if you need to,extract a new component and move state into it.

In Strict Mode,React will call your initializer function twice in order to help you find accidental impurities.

- Set Functions:-The set function returned by useState lets you update the state to a diff value and trigger a re-render.You can pass next state directly,or a function that calculates it from previous state.It does not have a return value.

```js
const [name, setName] = useState("Coolins");

function handleClick(){
   setName("Kosge");
}
```

### useEffect Hook

`useEffect` is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.
The useEffect hook is used to perform side effects in functional components. It allows you to run code after the component has rendered and handle actions such as data fetching, subscriptions, or manually updating the DOM.

## Writing Custom Hooks

Building your own Hooks lets you extract component logic into reusable functions.
