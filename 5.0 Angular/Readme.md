# Angular

Angular is an strong front-end JavaScript framework which means that it enforces a certain style of application development and project structure that developers need to follow to develop apps with Angular. However, it also offers enough flexibility to allow you to structure your project in an understandable and manageable manner.Angular is written in TypeScript.

Angular is a popular open-source JavaScript framework developed by Google for building dynamic web applications.

The key features of Angular include two-way data binding, dependency injection, modular architecture, component-based development, and a powerful template system.

## AngularJS vs. Angular

AngularJS was the older version of Angular, whose support officially ended in January 2022. Angular is a component-based front-end development framework built on TypeScript, which includes a collection of well-integrated libraries that include features like routing, forms management, client-server communication, and more.

AngularJS, also known as Angular 1.x, is an older version of Angular. Angular, starting from version 2, is a complete rewrite of AngularJS with improved performance and enhanced features.

## Angular Modules

Modules in Angular act like a container where we can group the components, directives, pipes, and services, related to the application.

## Dependency Injection

Dependency Injection is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

Dependency injection is a design pattern used in Angular to provide dependencies toa component from an external source. It helps in creating loosely coupled and
testable code.

Angular's Dependency Injection (DI) is a design pattern and mechanism for providingdependencies to components, services, and other objects in an application. It allows
for the decoupling of components and the reusability of services. In Angular, DI is managed by the Angular injector, which is responsible for creating and providing
instances of dependencies. DI is used by specifying dependencies in the constructor of a class and allowing Angular to resolve and inject the dependencies automatically.

Two main roles exist in the DI system: dependency consumer and dependency provider.

Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called Injector. When a dependency is requested, the injector checks its registry to see if there is an instance already available there. If not, a new instance is created and stored in the registry. Angular creates an application-wide injector (also known as "root" injector) during the application bootstrap process, as well as any other injectors as needed. In most cases you don't need to manually create injectors, but you should know that there is a layer that connects providers and consumers.

- Providing dependency
Imagine there is a class called HeroService that needs to act as a dependency in a component.

The first step is to add the @Injectable decorator to show that the class can be injected.

```ts
@Injectable()
class HeroService {}
```

The next step is to make it available in the DI by providing it. A dependency can be provided in multiple places:

At the Component level, using the providers field of the @Component decorator. In this case the HeroService becomes available to all instances of this component and other components and directives used in the template. For example:

```ts
@Component({
  standalone: true,
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}
```

When you register a provider at the component level, you get a new instance of the service with each new instance of that component.

Use the providers field of the ApplicationConfig object passed to the bootstrapApplication function to provide a service or other Injectable at the application level. In this scenario, the HeroService is available to all components, directives, and pipes declared in this NgModule or other NgModule which is within the same ModuleInjector applicable for this NgModule. When you register a provider in the ApplicationConfig, the same instance of a service is available to all applicable components, directives and pipes.

For NgModule based applications, use the providers field of the @NgModule decorator to provide a service or other Injectable available at the application level.

To understand all edge-cases, see Hierarchical injectors. For example:

```ts
export const appConfig: ApplicationConfig = {
    providers: [
      { provide: HeroService },
    ]
};
```

Then, in main.ts:

```ts
bootstrapApplication(AppComponent, appConfig)
```

At the application root level, which allows injecting it into other classes in the application. This can be done by adding the providedIn: 'root' field to the @Injectable decorator:

```ts
@Injectable({
  providedIn: 'root'
})
class HeroService {}
```

When you provide the service at the root level, Angular creates a single, shared instance of the HeroService and injects it into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service from the compiled application if it isn't used, a process known as tree-shaking.

- Injecting a dependency:- The most common way to inject a dependency is to declare it in a class constructor. When Angular creates a new instance of a component, directive, or pipe class, it determines which services or other dependencies that class needs by looking at the constructor parameter types. For example, if the HeroListComponent needs the HeroService, the constructor can look like this:

```ts
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

Another option is to use the inject method:

```ts
@Component({ … })
class HeroListComponent {
  private service = inject(HeroService);
}
```

When Angular discovers that a component depends on a service, it first checks if the injector has any existing instances of that service. If a requested service instance doesn't yet exist, the injector creates one using the registered provider, and adds it to the injector before returning the service to Angular.

When all requested services have been resolved and returned, Angular can call the component's constructor with those services as arguments.

## Directive

Directives are the functions that will execute whenever the Angular compiler finds them. Angular Directives enhance the capability of HTML elements by attaching custom behaviors to the DOM.

From the core concept, Angular directives are categorized into three categories: Attribute Directives, Structural Directives, and Component Directives.

## Library

Use the Angular CLI and the npm package manager to build and publish your library as an npm package.

## Standalone Component

Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules. Existing applications can optionally and incrementally adopt the new standalone style without any breaking changes.

## Difference between a component and a directive in Angular

A component is a type of directive with a template, while a directive doesn't necessarily have a template and can be used to extend the behavior of existing elements.

## Lazy Loading

Lazy loading is a technique in Angular where modules are loaded on-demand when the user navigates to a specific route. It helps in improving the initial loading time of the application by loading only the necessary modules.

## Angular Interceptor

Angular Interceptor is a feature that allows you to intercept HTTP requests or responses before they are sent or received. It is used to modify or handle requests globally in an application.

## Angular Material

Angular Material is a UI component library for Angular applications. It provides a set of pre-built and customizable UI components following the Material Design principles.

## Angular Universal

Angular Universal is a server-side rendering (SSR) solution for Angular applications. Itallows the application to be rendered on the server and sent as fully rendered HTML to the client, improving performance and SEO.

## Angular Ivy

Angular Ivy is the next-generation rendering engine and compiler introduced in Angular version 9. It offers improved performance, smaller bundle sizes, and better
debugging and build times.

## Angular change detection

Angular change detection is a mechanism that detects and propagates changes made to data in an application. It automatically updates the view to reflect the
updated data.

## AOT (Ahead-of-Time) compilation in Angular

AOT compilation is a process in Angular where the application's templates and components are compiled during the build phase rather than at runtime. It results in
faster rendering and smaller bundle sizes.

## JIT (Just-in-Time) compilation in Angular

JIT compilation is the default compilation mode in Angular, where the templates and components are compiled at runtime in the browser. It offers a faster development
cycle but slightly slower performance compared to AOT.

## purpose of the "async" pipe in Angular

The "async" pipe in Angular is used to subscribe to an Observable or Promise in the template and automatically update the view with the emitted values.

## decorator in Angular

A decorator in Angular is a function that modifies a class, property, method, or parameter by extending or adding behavior to it. Decorators are used extensively in
Angular to configure and enhance various parts of the application.

## tree shaking in Angular

Tree shaking is a technique used in Angular (enabled by the underlying TypeScript and webpack) to eliminate unused code from the final bundle during the build
process. It helps in reducing the bundle size and improving performance.

## Angular schematics

Angular schematics are command-line tools provided by the Angular CLI that automate the process of generating and modifying code in an Angular application.
They can be used to generate components, modules, services, and more.

## ng-container in Angular

ng-container is a special element in Angular that provides a way to group multiple elements without adding an extra element to the DOM. It is often used in conjunction
with structural directives.

## ng-content in Angular

ng-content is a placeholder element in Angular that allows the insertion of contentfrom the parent component into a child component. It is used to create reusable
components with customizable content.

## Angular Renderer

Angular Renderer is an API that provides a way to manipulate the DOM directly in Angular. It is used when there is a need to modify the DOM that is not covered by
Angular's declarative templates.

Angular's Renderer2 is a class that provides a way to manipulate the DOM directly in Angular. It is used when there is a need to modify the DOM that is not covered by
Angular's declarative templates. It provides methods for creating, modifying, and removing DOM elements, as well as for manipulating element properties, attributes,
and styles. It is used by injecting the Renderer2 service into a component or directive and using its methods to perform DOM manipulations.

## ViewEncapsulation in Angular

ViewEncapsulation is a feature in Angular that encapsulates the styles of a component to prevent them from leaking and affecting other components. It provides
different encapsulation modes like Emulated, Native, and None.

## zone.js in Angular

zone.js is a library used by Angular to provide a zone-based execution context. It helps in tracking asynchronous operations and triggering change detection when needed.

## Angular's ngZone service and how is it used

Angular's ngZone service provides a way to execute code within or outside the Angular zone. The Angular zone is an execution context that tracks asynchronous
operations and triggers change detection when needed. The ngZone service is used to manage change detection and optimize the performance of the application. It is
used by injecting the ngZone service into a component or service and using its run() method to execute code within the Angular zone.

## @ViewChild and @ContentChild used for

Decorators like @ViewChild and @ContentChild are used to access child elements or components in Angular. @ViewChild is used to access a single child component or
element, while @ContentChild is used to access projected content within a component.

## "HostListener" decorator in Angular

The "HostListener" decorator is used to add event listeners to the host element of a component in Angular. It allows the component to listen to and react to events raised on the host element.

## "HostBinding" decorator in Angular

The "HostBinding" decorator is used to bind a property of a component to a property of its host element. It allows the component to modify or reflect the state of the host element.

## "@Injectable" decorator in Angular

The "@Injectable" decorator is used to annotate a service class in Angular. It allows the class to be injected with dependencies and enables the Angular dependency
injection system to create and provide instances of the service.

The "async" pipe in Angular is used to subscribe to an asynchronous data source, such as an Observable or Promise, and automatically update the view with the emitted values.

## Angular Material CDK

Angular Material CDK (Component Dev Kit) isa set of tools and utilities provided by Angular Material that helps in building custom, reusable UI components. It provides
features like drag and drop, virtual scrolling, overlays, and more.

## Angular Ivy Renderer

Angular Ivy Renderer is the rendering engine introduced with Angular Ivy. It is responsible for transforming the component template into executable code,
optimizing rendering performance, and enabling features like incremental DOM updates.

## Angular Ivy's differential loading

Angular Ivy's differential loading is a feature that generates different bundles for modern browsers and older browsers. Modern browsers receive a smaller bundle with
ES2015+ syntax, while older browsers receive a larger bundle transpiled to ES5 syntax.

## "NoopAnimationsModule" module in Angular

The "NoopAnimationsModule" module is a module provided by Angular that disables animations in Angular Material components. It is useful in scenarios where animations
are not desired or need to be turned off for testing purposes.

## "@Host" decorator in Angular

The "@Host" decorator is used in Angular to restrict the dependency resolution to only the host component, excluding any parent components. It ensures that the
dependency is obtained from the immediate host component.

## "preserveWhitespaces" configuration in Angular templates

The "preserveWhitespaces" configuration in Angular templates is used to control thehandling of whitespace characters in the template. When set to "true", it preserves
all whitespace characters, including line breaks and spaces. When set to "false" or not specified, it removes unnecessary whitespace characters to minimize the size of the rendered HTML.

## Angular Material Theming

Angular Material Theming is a feature that allows customization of the visual appearance and style of Angular Material components. It provides a way to define
custom color palettes, typography, and other style attributes to create a unique look and feel for the application.

## "resolve" property in Angular route configuration

The "resolve" property in Angular route configuration is used to specify a set of data to be resolved before activating a route. It allows for fetching data from a server or performing other tasks asynchronously before the route is activated.

## "CanActivate" guard in Angular

The "CanActivate" guard is used in Angular to control access to a route based on certain conditions. It allows for preventing navigation to a route if specific criteria are not met, such as user authentication.

## "CanDeactivate" guard in Angular

The "CanDeactivate" guard is used in Angular to control whether a user can leave a route or component. It allows for prompting the user with a confirmation message or
performing other actions before leaving the current route.

## "CanLoad" guard in Angular

The "CanLoad" guard is used in Angular to control whether a module can be loaded lazily. It allows for preventing the loading of a module based on certain conditions,
such as user permissions.

Angular's HttpClient is a built-in module that provides an API for making HTTP requests to a server. It supports various HTTP methods such as GET, POST, PUT, DELETE, and provides features like handling request headers, request/response interception, and error handling. It is used by injecting the HttpClient service into a component or service and invoking its methods to perform HTTP operations.

## Angular's ngUpgrade module and when is it used

Angular's ngUpgrade module is used to facilitate the gradual migration of an AngularJS (Angular 1.x) application to Angular. It allows for running AngularJS and
Angular components side by side in the same application and provides utilities for interoperability between the two frameworks. The ngUpgrade module is used when
transitioning from AngularJS to Angular in an existing application. It allows for a step-by-step migration approach without the need to rewrite the entire application at once.

## Angular's HttpClientInterceptor and how is it used

Angular's HttpClientInterceptor is an interface that allows for intercepting and modifying HTTP requests and responses made with the HttpClient module.
Interceptors can be used to add headers, handle authentication, modify the request or response payload, or perform other actions. Interceptors are used by implementing
the HttpInterceptor interface and registering the interceptor in the application's module or using the providedIn property to automatically provide the interceptor.

## Angular's ElementRef and how is it used

Angular's ElementRef is a class that represents a reference to a DOM element. It provides access to the underlying DOM element and allows for direct manipulation of
its properties and methods. It is used by injecting the ElementRef into a component or directive and accessing its nativeElement property to interact with the DOM element.

## Observables

Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time.

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes. This pattern is similar (but not identical) to the publish/subscribe design pattern.

Angular apps tend to use the RxJS library for Observables. This overview covers just the basics of observables as implemented by that library.

Observables are declarative. You define a function for publishing values — the source — but that function is not executed until a consumer subscribes to the observable by calling the observable's subscribe method.

This subscriber then receives notifications from the observable until it completes, emits an error, or the consumer unsubscribes.

An observable can deliver multiple values of any type — literals, messages, or events — depending on the context. A stream of keystrokes, an HTTP response, and the ticks of an interval timer are among the typical observable sources. The observable API applies consistently across all of these diverse sources.

An observable can emit one, many, or no values while subscribed. It can emit synchronously (emit the first value immediately) or asynchronously (emit values over time).

Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values and unsubscribing when done.

RxJS Operators enable transformations of observable values. An Operator takes an observable source, manipulates the values from that source in some useful way, and returns a new observable of the transformed values. When you subscribe to that new observable, you get the results of the intermediate transformations.

This ability to progressively transform observable values - and even combine multiple observable sources into a consolidated observable - is one of the most powerful and appealing of RxJS features.

Accordingly, observables are used extensively within Angular applications and within Angular itself.

- Observable:- An observable is an object that can emit one or more values over time.

Here's a simple observable that will emit 1, then 2, then 3, and then completes.

An observable emitting 3 integers

```ts
import { of } from 'rxjs';

const numbers$ = of(1, 2, 3); // simple observable that emits three values
```

The RxJS method, of(...values), creates an Observable instance that synchronously delivers each of the values provided as arguments.

Naming conventions for observables
Notice the "$" on the end of the observable name. The "$" signifies that the variable is an observable "$tream" of values.

This is a widely adopted naming convention for observables.

Not everyone likes it. Because Angular applications are written in TypeScript and code editors are good at revealing an object's type, you can usually tell when a variable is an observable. Many feel the "$" suffix is unnecessary and potentially misleading.

On the other hand, the trailing "$" can help you quickly identify observables when scanning the code. Also, if you want a property to hold the most recent value emitted from an observable, it can be convenient to use the source observable's root name without the "$".

The Angular framework and tooling do not enforce this convention. Feel free to use it or not.

- Subscribing:- An observable begins publishing values only when someone subscribes to it. That "1-2-3" observable won't emit any numbers until you subscribe by calling the observable's subscribe() method.

If you want to begin publishing but don't care about the values or when it completes, you can call subscribe with no arguments at all

Start publishing

```ts
numbers$.subscribe();
```

You're more likely interested in doing something with the values. Pass in a method - called a "next" handler - that does something every time the observable emits a value.

Subscribe to emitted values

```ts
numbers$.subscribe(
  value => console.log('Observable emitted the next value: ' + value)
);
```

Passing a next() function into subscribe is a convenient syntax for this most typical case. If you also need to know when the observable emits an error or completes, you'll have to pass in an Observer instead.

- Defining observers
An observable has three types of notifications: "next", "error", and "complete".

An Observer is an object whose properties contain handlers for these notifications.

NOTIFICATION TYPE DETAILS

next- A handler for each delivered value. Called zero or more times after execution starts.
error- A handler for an error notification. An error halts execution of the observable instance and unsubscribes.
complete- A handler for the execution-complete notification. Do not expect next or error to be called again. Automatically unsubscribes.
Here is an example of passing an observer object to subscribe:

Subscribe with full observer object

```ts
numbers$.subscribe({
  next: value => console.log('Observable emitted the next value: ' + value),
  error: err => console.error('Observable emitted an error: ' + err),
  complete: () => console.log('Observable emitted the complete notification')
});
```

Alternatively, you can create the Observer object with functions named next(), error() and complete().

```ts
numbers$.subscribe({
  next(value) { console.log('Observable emitted the next value: ' + value); },
  error(err)  { console.error('Observable emitted an error: ' + err); },
  complete()  { console.log('Observable emitted the complete notification'); }
});
```

This works because JavaScript turns the function names into the property names.

All of the handler properties are optional. If you omit a handler for one of these properties, the observer ignores notifications of that type.

- Error handling
Because observables can produce values asynchronously, try/catch will not effectively catch errors. Instead, you handle errors by specifying an error function on the observer.

Producing an error also causes the observable to clean up subscriptions and stop producing values.

```ts
numbers$.subscribe({
  next: value => console.log('Observable emitted the next value: ' + value),
  error: err => console.error('Observable emitted an error: ' + err),
});
```

Error handling (and specifically recovering from an error) is covered in more detail in a later section.

- Creating observables
The RxJS library contains a number of functions for creating observables. Some of the most useful are covered later.

You can also use the Observable constructor to create an observable stream of any type. The constructor takes as its argument the subscriber function to run when the observable's subscribe() method executes.

A subscriber function receives an Observer object, and can publish values to the observer's next(), error, and complete handlers.

For example, to create an observable equivalent to the of(1, 2, 3) above, you could write something like this:

Create observable with constructor

```ts
// This function runs when subscribe() is called
function sequenceSubscriber(observer: Observer<number>) {
  // synchronously deliver 1, 2, and 3, then completes
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  // Return the unsubscribe function.
  // This one doesn't do anything
  // because values are delivered synchronously
  // and there is nothing to clean up.
  return {unsubscribe() {}};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

// Execute the Observable and print the result of each notification
sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log('Finished sequence'); }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
```

Geolocation example
The following example demonstrates the concepts above by showing how to create and consume an observable that reports geolocation updates.

Observe geolocation updates

```ts
// Create an Observable that will start listening to browser geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
  let watchId: number;

  // The geolocation API (if it exists) provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => observer.next(position),
      (error: GeolocationPositionError) => observer.error(error)
    );
  } else {
    observer.error('Geolocation not available');
  }

  // When the consumer unsubscribes, stop listening to geolocation changes.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

// Call subscribe() to start listening for geolocation updates.
const locationsSubscription = locations.subscribe({
  next(position) {
    console.log('Current Position: ', position);
  },
  error(msg) {
    console.log('Error Getting Location: ', msg);
  }
});

// Stop listening for location after 10 seconds
setTimeout(() => {
  locationsSubscription.unsubscribe();
}, 10000);
Last reviewed on Fri Aug 25 2023
```

@angular/common:- Implements fundamental Angular framework functionality, including directives and pipes, location services used in routing, HTTP services, localization support, and so on.
The CommonModule exports are re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.
@angular/common/http:- Implements an HTTP client API for Angular apps that relies on the XMLHttpRequest interface exposed by browsers.
@angular/common/http/testing:- Supplies a testing module for the Angular HTTP subsystem.
@angular/common/testing:- Supplies infrastructure for testing functionality supplied by @angular/common.
@angular/common/upgrade:- Provides tools for upgrading from the $location service provided in AngularJS to Angular's unified location service.

@angular/core:- Implements Angular's core functionality, low-level services, and utilities.

  1. Defines the class infrastructure for components, view hierarchies, change detection, rendering, and event handling.
  2. Defines the decorators that supply metadata and context for Angular constructs.
  3. Defines infrastructure for dependency injection (DI), internationalization (i18n), and various testing and debugging facilities.
@angular/core/global:- Exposes a set of functions in the global namespace which are useful for debugging the current state of your application. These functions are exposed via the global ng "namespace" variable automatically when you import from @angular/core and run your application in development mode. These functions are not exposed when the application runs in a production mode.
@angular/core/rxjs-interop:- Includes utilities related to using the RxJS library in conjunction with Angular's signal-based reactivity system.
@angular/core/testing:- Provides infrastructure for testing Angular core functionality.

@angular/forms:- Implements a set of directives and providers to communicate with native DOM elements when building forms to capture user input.

@angular/animations:- Implements a domain-specific language (DSL) for defining web animation sequences for HTML elements as multiple transformations over time.

@angular/service-worker:- Implements a service worker for Angular apps. Adding a service worker to an Angular app is one of the steps for turning it into a Progressive Web App (also known as a PWA).
