# AngularMoviesList - project details

This project is a showcase of an Angular 11 consuming the Movie Database Rest API.

This project follows the "Clean Architecture" pattern by Uncle Bob, although does not represent the full implementation of this architecture pattern due by the limitations of the DI system orchestrated by the Angular framework.

Nevertheless, provides a suitable code structure of testable and decoupled layers.

The project was inspired by [Angular clean architecture](https://github.com/im-a-giraffe/angular-clean-architecture).

## Possible improvements 

- Abstraction of the use cases for mocking purposes when writing tests
- Adding pagination: When scrolled to bottom event, call to the Movie DB API to fetch the incremented page.
- Adding unit tests for the services and the repository (TDD was not followed due to time limitations)
- Improve the UI/UX.

## Project version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
