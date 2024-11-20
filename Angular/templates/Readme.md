# Template

A template is a form of HTML that tells Angular how to render the component.

## Interpolation

Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters. Angular replaces currentCustomer with the string value of the corresponding component property.

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
