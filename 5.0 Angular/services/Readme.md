# Services

A service in Angular is a reusable singleton object that encapsulates a specific functionality and can be injected into components or other services.

Components shouldn't fetch or save data directly and shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service. Service is where all the remote API calls exist to retrieve and provide data to components.

## ngZone in Angular

ngZone is a service in Angular that provides a way to execute code outside or inside the Angular zone. It helps in managing change detection and optimizing
performance.

The "ngZone" service provides a way to execute code within or outside the Angular zone. It is used to handle change detection and trigger Angular's rendering cycle.
