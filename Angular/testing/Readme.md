# Testing Angular Apps

In any software development process, Testing the application plays a vital role. If Bugs and crashes are not figured out and solved they can defame the development company as well as hurt the clients too. But, Angular’s architecture comes with built-in testability features. As soon as you create a new project with Angular CLI, two essential testing tools are installed.They are: Jasmine and Karma. Jasmine is the testing library which structures individual tests into specifications (“specs”) and suites. And Karma is the test runner, which enables the different browsers to run the tests mentioned by Jasmine and the browsers will finally report the test results back.

## Testing pipes

An Angular Pipe is a special function that is called from a Component template. Its purpose is to transform a value: You pass a value to the Pipe, the Pipe computes a new value and returns it.

## Testing services

In an Angular application, Services are responsible for fetching, storing and processing data. Services are singletons, meaning there is only one instance of a Service during runtime. They are fit for central data storage, HTTP and WebSocket communication as well as data validation.

## Testing component bindings

Angular processes all data bindings once for each JavaScript event cycle, from the root of the application component tree through all child components. Data binding plays an important role in communication between a template and its component, and is also important for communication between parent and child components.

## Testing directives

Directives are classes that add new behavior or modify the existing behavior to the elements in the template. Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

## Testing component templates

With a component template , you can save and reuse component processes and properties and create components from them; template-based components inherit the template's properties and process.
