# Routing

Routing in Angular allows the users to create a single-page application with multiple views and navigation between them. Users can switch between these views without losing the application state and properties.

@angular/router Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.

Angular Router is a built-in module in Angular that provides navigation and routing functionality. It allows developers to create single-page applications with multiple views and handle navigation between them.

Defines the Route object that maps a URL path to a component, and the RouterOutlet directive that you use to place a routed view in a template, as well as a complete API for configuring, querying, and controlling the router state.Import RouterModule to use the Router service in your app.

Angular's Router is a module that provides a way to implement navigation and routing in an Angular application. It allows for defining routes, navigating between
routes, and handling route parameters and query parameters. The Router module is used by importing the RouterModule in the application's module and configuring the
routes using the RouterModule.forRoot() method. The Router module is then used by injecting the Router service into components and using its methods to navigate and
interact with therouting system.

1. @angular/router:- Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.
2. @angular/router/testing:- Supplies a testing module for the Angular Router subsystem.
3. @angular/router/upgrade:- Provides support for upgrading routing applications from Angular JS to Angular.

- NgModules
RouterModule:- Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.

## Configuration

## Router outlets

The router-outlet is a directive that's available from the @angular/router package and is used by the router to mark where in a template, a matched component should be inserted.

Thanks to the router outlet, your app will have multiple views/pages and the app template acts like a shell of your application. Any element, you add to the shell will be rendered in each view, only the part marked by the router outlet will be changed between views.

## Router links

In Angular, routerLink when applied to an element in a template, makes that element a link that initiates navigation to a route. Navigation opens one or more routed components in one or more `<router-outlet>` locations on the page.

## Router Events

The Angular Router raises events when it navigates from one route to another route. It raises several events such as `NavigationStart`, `NavigationEnd`, `NavigationCancel`, `NavigationError`, `ResolveStart`, etc. You can listen to these events and find out when the state of the route changes. Some of the useful events are route change start (NavigationStart) and route change end (NavigationEnd).

## Route Guards

Angular route guards are interfaces provided by Angular which, when implemented, allow us to control the accessibility of a route based on conditions provided in class implementation of that interface.

Some types of angular guards are `CanActivate`, `CanActivateChild`, `CanLoad`, `CanDeactivate` and `Resolve`.

## Lazy loading

Lazy loading is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated. It improves the application load time speed by splitting the application into several bundles. The bundles are loaded as required when the user navigates through the app.

## Angular's ActivatedRoute and how is it used

Angular's ActivatedRoute is a service that provides information about the currently activated route. It contains route parameters, query parameters, data resolved for the route, and other route-related information. It is used by injecting the ActivatedRoute service into a component and accessing its properties and methods to retrieve information about the current route

- Importing your new components:- To use your new components, import them into app.routes.ts at the top of the file, as follows:

```ts
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
```

Defining a basic route
There are three fundamental building blocks to creating a route.

Import the routes into app.config.ts and add it to the provideRouter function.

The Angular CLI performs this step for you. However, if you are creating an application manually or working with an existing, non-CLI application, verify that the imports and configuration are correct. The following is the default ApplicationConfig using the CLI.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

Set up a Routes array for your routes

The Angular CLI performs this step automatically.

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

Define your routes in your Routes array.

Each route in this array is a JavaScript object that contains two properties. The first property, path, defines the URL path for the route. The second property, component, defines the component Angular should use for the corresponding path.

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];
```

Add your routes to your application.

Now that you have defined your routes, add them to your application. First, add links to the two components. Assign the anchor tag that you want to add the route to the routerLink attribute. Set the value of the attribute to the component to show when a user clicks on each link. Next, update your component template to include *router-outlet*. This element informs Angular to update the application view with the component for the selected route.

```html
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet></router-outlet>
```

You also need to add the RouterLink, RouterLinkActive, and RouterOutlet to the imports array of AppComponent.

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
}
```

## Route order

The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. List routes with a static path first, followed by an empty path route, which matches the default route. The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.

## Getting route information

Often, as a user navigates your application, you want to pass information from one component to another. For example, consider an application that displays a shopping list of grocery items. Each item in the list has a unique id. To edit an item, users click an Edit button, which opens an EditGroceryItem component. You want that component to retrieve the id for the grocery item so it can display the right information to the user.

Use a route to pass this type of information to your application components. To do so, you use the withComponentInputBinding feature with provideRouter or the bindToComponentInputs option of RouterModule.forRoot.

To get information from a route:

Add the withComponentInputBinding feature to the provideRouter method.

```ts
provideRouter feature
providers: [
  provideRouter(appRoutes, withComponentInputBinding()),
]
```

Update the component to have an Input matching the name of the parameter.

```ts
The component input (excerpt)
@Input()
set id(heroId: string) {
  this.hero$ = this.service.getHero(heroId);
}
```

NOTE:
You can bind all route data with key, value pairs to component inputs: static or resolved route data, path parameters, matrix parameters, and query parameters.
If you want to use the parent components route info you will need to set the router paramsInheritanceStrategy option: withRouterConfig({paramsInheritanceStrategy: 'always'})

## Setting up wildcard

A well-functioning application should gracefully handle when users attempt to navigate to a part of your application that does not exist. To add this functionality to your application, you set up a wildcard route. The Angular router selects this route any time the requested URL doesn't match any router paths.

To set up a wildcard route, add the following code to your routes definition.

```ts
{ path: '**', component: &lt;component-name&gt; }
```

The two asterisks, **, indicate to Angular that this routes definition is a wildcard route. For the component property, you can define any component in your application. Common choices include an application-specific PageNotFoundComponent, which you can define to display a 404 page to your users; or a redirect to your application's main component. A wildcard route is the last route because it matches any URL. For more detail on why order matters for routes, see Route order.

## Displaying a 404 page

To display a 404 page, set up a wildcard route with the component property set to the component you'd like to use for your 404 page as follows:

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```

The last route with the path of ** is a wildcard route. The router selects this route if the requested URL doesn't match any of the paths earlier in the list and sends the user to the PageNotFoundComponent.

## Setting up redirects

To set up a redirect, configure a route with the path you want to redirect from, the component you want to redirect to, and a pathMatch value that tells the router how to match the URL.

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```
