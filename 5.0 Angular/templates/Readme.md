# Template

A template in Angular is an HTML file that defines the structure and layout of a component. It includes placeholders and binding expressions to dynamically display data.
In Angular, a template is a chunk of HTML. Use special syntax within a template to build on many of Angular's features.

A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your application's logic and the state of application and DOM data. Your template can use data binding to coordinate the application and DOM data, pipes to transform data before it is displayed, and directives to apply application logic to what gets displayed.

## Template syntax

Each Angular template in your application is a section of HTML to include as a part of the page that the browser displays. An Angular HTML template renders a view, or user interface, in the browser, just like regular HTML, but with a lot more functionality.

When you generate an Angular application with the Angular CLI, the app.component.html file is the default template containing placeholder HTML

Angular helps you get and set DOM (Document Object Model) values dynamically with features such as built-in template functions, variables, event listening, and data binding.

Almost all HTML syntax is valid template syntax. However, because an Angular template is part of an overall webpage, and not the entire page, you don't need to include elements such as *html*, *body*, or *base*, and can focus exclusively on the part of the page you are developing.

To eliminate the risk of script injection attacks, Angular does not support the *script* element in templates. Angular ignores the *script* tag and outputs a warning to the browser console.

- Interpolation :- Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.

```ts
<h2>{{title}}</h2>

title: string ="Home";
```

## Property binding

Property binding helps you set values for properties of HTML elements or directives. To bind to an element's property, enclose it in square brackets `[]` which causes Angular to evaluate the right-hand side of the assignment as a dynamic expression.

## Template statements

Template statements are methods or properties that you can use in your HTML to respond to user events. With template statements, your application can engage users through actions such as displaying dynamic content or submitting forms. Enclose the event in `()` which causes Angular to evaluate the right hand side of the assignment as one or more template statements chained together using semicolon `;`.

## Binding data props attrs events

In an Angular template, a binding creates a live connection between view and the model and keeps them both in sync.

- **property**: helps you set values for properties of HTML elements or directives.
- **attributes**: helps you set values for attributes of HTML elements directly.
- **event**: lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
- **data**: It's a combination of property and event binding and helps you share data between components.

## Reference vars

Template reference variables help you use data from one part of a template in another part of the template. A template variable can refer to a DOM element within a template, component or directive. In the template, use the hash symbol, `#`, to declare a template reference variable.

## Input output

`@Input()` and `@Output()` give a child component a way to communicate with its parent component. `@Input()` lets a parent component update data in the child component. Conversely, `@Output()` lets the child send data to a parent component.

## ng-template in Angular

ng-template is a directive in Angular that defines a template block that can be conditionally rendered or used as a template for other structural directives like ngIf
and ngFor. It allows for greater flexibility in rendering dynamic content.

## "ngContent" selector in Angular

The "ngContent" selector is used in the template of a component to define a content projection slot. It allows the component to accept and render content provided by its parent component.
