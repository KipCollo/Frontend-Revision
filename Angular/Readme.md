# Angular

Angular is an strong front-end JavaScript framework which means that it enforces a certain style of application development and project structure that developers need to follow to develop apps with Angular. However, it also offers enough flexibility to allow you to structure your project in an understandable and manageable manner.

## AngularJS vs. Angular

AngularJS was the older version of Angular, whose support officially ended in January 2022. Angular is a component-based front-end development framework built on TypeScript, which includes a collection of well-integrated libraries that include features like routing, forms management, client-server communication, and more.

## Angular Components

Components are the main building block for Angular applications. Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines the behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

## Angular Modules

Modules in Angular act like a container where we can group the components, directives, pipes, and services, related to the application.

## Dependency Injection

Dependency Injection is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

## Services

Services let you define code or functionalities that are then accessible and reusable in many other components in the Angular project. It also helps you with the abstraction of logic and data that is hosted independently but can be shared across other components.

## Directive

Directives are the functions that will execute whenever the Angular compiler finds them. Angular Directives enhance the capability of HTML elements by attaching custom behaviors to the DOM.

From the core concept, Angular directives are categorized into three categories: Attribute Directives, Structural Directives, and Component Directives.

## Custom Pipes

Pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions in template expressions to accept an input value and return a transformed value. Pipes are helpful because you can use them throughout your application while only declaring each pipe once. For example, you would use a pipe to show the date as April 15, 1988, rather than the raw string format.

## Library

Use the Angular CLI and the npm package manager to build and publish your library as an npm package.

## Standalone Component

Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules. Existing applications can optionally and incrementally adopt the new standalone style without any breaking changes.
