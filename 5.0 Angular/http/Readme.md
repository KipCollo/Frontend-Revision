# HTTP Services

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.

- Perform CRUD operations
- Extract reusable data service
- Properly handle diff kind of errors
- Build app with proper separation of service

## HTTP Client

Angular HTTP Client is a module that provides an API to make HTTP requests to a server. It simplifies the process of communicating with a backend and handling responses.

The HTTP client service offers the following major features.

1. The ability to request typed response objects
2. Streamlined error handling
3. Testability features
4. Request and response interception

You can use JsonPlaceholder for testing backend services.<jsonplaceholder.typicode.com>

## HTTP: Setup for server communication

Before you can use HttpClient, you must add it to the application's root dependency injector.

Most apps do so in the providers array of bootstrapApplication() in main.ts.

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
});
```

OR

```ts
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CourseComponent } from './courses.component'
import { HttpModule } from '@aangular/common/http'

@NgModule({
   declarations: [
      AppComponent,
      CourseComponent
   ],
   imports: [
      BrowserModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule{}
```

You can then inject the HttpClient service as a dependency of an application class, as shown in the following ConfigService example.

```ts
app/config/config.service.ts (excerpt)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
```
