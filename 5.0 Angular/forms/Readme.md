# Forms

Angular Forms is a set of features and techniques used to handle and validate user input in forms.

Angular provides two different approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

Forms are used to handle user inputs in many applications. It enables users from entering sensitive information to performing several data entry tasks.

Angular provides two approaches to handle user inputs trough forms:

1. Reactive
2. Template-driven forms.

Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.

1. Reactive forms - Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.
2. Template-driven forms - Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're straightforward to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

Template-driven forms rely on directives in the template to create and handle forms, while reactive forms use explicit form controls and reactive programming to manage form data and validation.

## Reactive Forms

Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.

Reactive Forms in angular are those which used to handle the inputs coming from the user. We can define controls by using classes such as FormGroup and FormControl.

## Template Driven Forms

Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're straightforward to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

A Template driven form is the simplest form we can build in Angular. It is mainly used for creating simple form application.It uses two-way data-binding (ngModel) to create and handle the form components.

The "ngOnInit" method is a lifecycle hook in Angular that is used in forms to initialize and set up the form controls and validators. It is called after the component has been initialized and is a good place to set the initial values of the form or set up any form-related logic.

Template-driven forms use two-way data binding to update the data model in the component as changes are made in the template and vice versa.

Template-driven forms rely on directives defined in the FormsModule.

1. NgModel- Reconciles value changes in the attached form element with changes in the data model, allowing you to respond to user input with input validation and error handling.
2. NgForm- Creates a top-level FormGroup instance and binds it to a <form> element to track aggregated form value and validation status. As soon as you import FormsModule, this directive becomes active by default on all <form> tags. You don't need to add a special selector.
3. NgModelGroup- Creates and binds a FormGroup instance to a DOM element.

## Common form foundation classes

Both reactive and template-driven forms are built on the following base classes.

1. FormControl - Tracks the value and validation status of an individual form control.
2. FormGroup - Tracks the same values and status for a collection of form controls.Each form is part of FormGroup.
3. FormArray -  the same values and status for an array of form controls.
4. ControlValueAccessor - Creates a bridge between Angular FormControl instances and built-in DOM elements.

## Angular's FormBuilder and how is it used

Angular's FormBuilder is a utility class that provides a concise way to define and create form controls and form groups. It simplifies the process of creating and
managing form controls by providing methods to define form controls with validation rules and default values. It is used by injecting the FormBuilder service into a

- Setup in template-driven forms

In template-driven forms, the form model is implicit, rather than explicit. The directive NgModel creates and manages a FormControl instance for a given form element.
The following component implements the same input field for a single control, using template-driven forms.

```ts
import {Component} from '@angular/core';
@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
  standalone: false,
})
export class FavoriteColorComponent {
  favoriteColor = '';
}
```

- Setup in reactive forms

With reactive forms, you define the form model directly in the component class. The [formControl] directive links the explicitly created FormControl instance to a specific form element in the view, using an internal value accessor.
The following component implements an input field for a single control, using reactive forms. In this example, the form model is the FormControl instance.

```ts
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
  standalone: false,
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
```
