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

## Services

Services let you define code or functionalities that are then accessible and reusable in many other components in the Angular project. It also helps you with the abstraction of logic and data that is hosted independently but can be shared across other components.

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
