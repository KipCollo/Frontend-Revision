# AngulAR cli

Angular CLI (Command Line Interface) is a powerful command-line tool that helps in initializing, developing,scaffolding and maintaining Angular applications directly from command shell. It provides various commands to generate components, services, modules, etc.

The Angular CLI is a tool created by Angular team that improves developer experience while building Angular applications.It hides much of complexity of scaffolding and configuring an Angular application while allowing the developer to concentrate on coding.

we can install angular latest CLI using the following command

`sudo npm install -g @angular/cli`

To verify that Angular CLI has been installed correctly,we can run the command:-

`ng version`

## CLI Commands

- `ng new <project-name> [ options ]` - The new command is used to create a new Angular application or a new Angular workspace. By default, the project is created under the current directory.Creates and initializes a new Angular application that is the default project for a new workspace.Alias is 'n'.

An Angular workspace is an Angular CLI project that contains one or more Angular applications,where some of them can be Angular libraries.

Provides interactive prompts for optional configuration, such as adding routing support. All prompts can safely be allowed to default.

1. The new workspace folder is given the specified project name, and contains configuration files at the top level.
2. By default, the files for a new initial application (with the same name as the workspace) are placed in the src/ subfolder.
3. The new application's configuration appears in the projects section of the angular.json workspace configuration file, under its project name.
4. Subsequent applications that you generate in the workspace reside in the projects/ subfolder.

Options:
--dry-run - only output the files created and operations performed not actually create the project. Alias: 'd'.
--verbose - output more information.Alias: 'v'.
--skip-npm - do not run any npm command once the project is created
--skip-git  do not create a git repository for the project.
--directory - parent directory to create the new project into.

If you plan to have multiple applications in the workspace, you can create an empty workspace by using the *--no-create-application* option. You can then use *ng generate application* to create an initial application. This allows a workspace name different from the initial app name, and ensures that all applications reside in the /projects subfolder, matching the structure of the configuration file.

The Angular CLI initiates creation process of your Angular application,which consits of the following:-

1. Scaffolding the necessary folder structure of a typical Angular CLI project
2. Installing the required npm dependencies and Angular packages
3. Initializing Git in the Angular CLI project

The Angular CLI creates a minimal Angular application by default to provide us with
a starting point for our Angular project. It contains some ready-made CSS styles and
HTML content

- `ng init *project-name* [options ]` - Creates a new Angular project in the current folder.

Options
--dry-run - only output the files created and operations performed not actually create the project Alias: 'd'.
--verbose - output more information. Alias:'v'.
--skip-npm - do not run any npm command once the project is created
-- name - The name of the project to create.

- **ng completion** - Adds autocomplete functionalitY to your shell for ng commands.

- **ng doc *keyword*** - Opens a browser window with the keyword as search in Angular documentation.

- **ng e2e** - Runs all end-to-end tests defined in your application,using protractor.

- **ng format** - Formats the code of this project using clang-format.

- `ng generate *type* [options]` - Generate new code inside your project.Alias: 'g'

Valid types:-

1. component <path/to/component-name> - Generates a component.
2. directive <path/to/directive-name> - Generates a directive.
3. route <route/to/route-component> - Generates a route. The name should nbe the route used in the RouteConfig.
4. pipe <path/to/pipe-name>Generates a pipe.
5. service <path/to/service-name> - Generates a service.
6. modules

The generated component has its own directory, unless the --flat options is specified.

Options
--flat - Do not create the code in its own directory.
--route=`route` - Specify the parent route. only for generating components and routes. Default to the path specified.
--skip-router-generation - Skip generating the route config for the parent.only usable for routes.
--default - Specify that the route should be a default route.
--lazy - Specify that the route is lazy. Default to true.

- **ng get pathl, path2, ...pathN> [options ]** - Get a value from the Angular CLI configuration. The pathN arguments is a val Javascript path like "users[ 1].userName ". If the value isn't set,"undefined" will be shown. This command by default only works inside a project directory
Options:
--global - Returns the global configuration value instead of the local one (if both are set). This option also makes the command
work outside of a project directory.

- **ng set path1=valuel, path2=value2, ...pathN=valueN> [options]** - Set a value in the Angular CLI configuration. By default, sets the value in the project ' s configuration if ran inside a project, or fails if not inside a project.The pathN arguments is a valid JavaScript path 1ike "users[1].userName". The value will be coerced to the proper type or will throw an error if the type cannot be coerced.
Options
--global - Sets the global configuration value instead of a local one. This also makes ng set works outside a project.

- **ng github-pages :deploy [options ]** - Ankita TripathyBuild the application for production,setup the itHub repository,then publish the app.
options
--message=<message> - Commit message to include with the build.Defaults to "new gh-pages version"
--environment=<env> - The Angular environment to build.Defaults to "production"
--branch=<branch-name> - The git branch to push the pages to.Defaults to "gh-branch".
--skip-build - Skip building the project before publishing.
--gh-token=<token>API token to use to deploy. Required.
--gh-username=<username>The Github username to use. Required.

- **ng lint** - Run the codelyzer linter on your project.

- `ng test [options]` - Run unit tests, using karma.
Options:
--watch - Keep running the tests. Default to true.
--browsers, --colors, --reporters, --port, --log-level - Those arguments are passed directlY to karma.

- **ng version(ng v)** - Outputs the version of angular-cli,node and the operating system.

- `Ng build`:- The command can be used to build a project of type "application" or "library". When used to build a library, a different builder is invoked, and only the ts-config, configuration, and watch options are applied. All other options apply only to building applications.
The Angular CLI command to build the application for production is:

```bash
ng build --prod
```

- `Ng serve`:-This command builds, deploy, serves and every time watches your code changes.If it find any change in code it builds and serves that code automatically.After coding our Angular apps using TypeScript, we use the Angular CLI command to build the app.

Note that if you get the message:Port 4200 is already in use. Use '--port' to specify a different port.This means that you already have another service running on port 4200. If this is the case you can either 1. shut down the other service or 2. use the --port flag when running ng serve like this:

ng serve --port 9001

The above command would change the URL you open in your browser to something like: <http://localhost:9001>

Another thing to notice is that, on some machines, the domain localhost may not work. You may see a set of numbers such as 127.0.0.1. When you run ng serve it should show you what URL the server is running on, so be sure to read the messages on your machine to find your exact development URL.

## Ng test

ng test is used to runs unit tests in angular project.

`ng test <project> [options]` | `ng t <project> [options]`

- `Ng e2e`:- End-to-end testing (E2E) of Angular applications is performed using the Protractor testing framework, which is created by the Angular team themselves. Protractor can perform end to end tests on Angular applications that are running in a real browser by interacting with it, similar to that of an end-user.

## Ng new

`$ ng new [name]`

That’s the default usage of the command and creating a new project folder with name. The project which is created in that folder is containing:

The default Angular project, All dependencies installed in node_modules folder , Testing files for each components

`ng help`:- To view all commands you can use this command.

## Schematics

A schematic is a template-based code generator that supports complex logic. It is a set of instructions for transforming a software project by generating or modifying code.

Angular schematics are command-line tools provided by the Angular CLI that automate the process of generating and modifying code in an Angular application.
They can be used to generate components, modules, services, and more.
