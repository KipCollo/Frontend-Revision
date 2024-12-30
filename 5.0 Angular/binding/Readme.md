# Data Binding

Data binding is a mechanism in Angular that establishes a connection between the component and the template, allowing the synchronization of data between them.Data binding automatically keeps your page up-to-date based on your application's state. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.

The different types of data binding in Angular are:

1. Interpolation ({{}})
2. Property binding ([...])
3. Event binding ((...))
4. Two-way binding ([(...)])

## Interpolaion

Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.
To illustrate how interpolation works, consider an Angular component that contains a currentCustomer variable:

```ts
currentCustomer = 'Maria';
```

Use interpolation to display the value of this variable in the corresponding component template:

```html
<h3>Current customer: {{ currentCustomer }}</h3>
```

Angular replaces currentCustomer with the string value of the corresponding component property. In this case, the value is Maria.

In the following example, Angular evaluates the title and itemImageUrl properties to display some title text and an image.

```htm
<p>{{title}}</p>
<div><img alt="item" src="{{itemImageUrl}}"></div>
```

## Property Binding

Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.Property binding moves a value in one direction, from a component's property into a target element property.

To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.A target property is the DOM property to which you want to assign a value.

To bind the src property of an *img* element to a component's property, place src in square brackets followed by an equal sign and then the property.

Using the property itemImageUrl, type the following code:

```html
src/app/app.component.html
<img alt="item" [src]="itemImageUrl">
```

Declare the itemImageUrl property in the class, in this case AppComponent.

```ts
src/app/app.component.ts
itemImageUrl = '../assets/phone.svg';
```

## Event Binding

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.To bind to an event you use the Angular event binding syntax. This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right.

```html
<button (click)="onSave()">Save</button>
```

The event binding listens for the button's click events and calls the component's onSave() method whenever a click occurs.

To determine an event target, Angular checks if the name of the target event matches an event property of a known directive.

## Two way binding

Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.
Two-way binding combines property binding with event binding:

1. Property binding - Sets a specific element property.
2. Event binding- Listens for an element change event.

Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.

```html
src/app/app.component.html
<app-sizer [(size)]="fontSizePx"></app-sizer>
```
