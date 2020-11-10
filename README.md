# Project information
See https://drive.google.com/file/d/1iBqZ6yjztZkzliY3QiZRtbggXFvTrukh/view?usp=sharing for description in Swedish and other files in https://drive.google.com/drive/folders/1NomQMBN7bISZRBNthiBFbYqZw2bsG4Jz?usp=sharing Copies of some of those files are also available in the /documentation subdirectory of this GitHub project.

The prototyping was preformed as a student project by Linda Nordlund and Vedran Isak on behalf of Region Östergötland.

# Technical prototype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.
This project also used the Angular Material Component Library for some of the user defined components.
Unfortunately, due to formatting issues among other things, some user defined components were created using
"ordinary" HTML elements. 

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How the repository is structured
All of the imported Angular Material Components can be found in the material.module.ts file (src/app/material/material.module.ts).
All of the general imports and user defined components can be found in the app.module.ts file (src/app/app.module.ts).
All of the routing configurations can be found in the app-routing.module.ts file (src/app/app-routing.module.ts).
All of the images used can be found in the images folder in assets (src/assets/images).

The components are structured in two folders, containers and components. Containers contains all of the "site" components, such as the main menu, the risk assessment page etc.
Components contains all of the user defined components, that are used as if they were any other ordinary HTML element. The user defined components are for instance input, card, regular-button, danger-button etc. 
This application has been developed with heavy inspiration from a Figma prototype that I (Vedran Isak) and my partner (Linda Nordlund) developed prior to me starting developing this project. 

## STUFF TO DO:

The HTML layout in the app.component.html file (src/app/app.component.html) can most likely be structed in a more conventional way.

Several of the images used in the application (if not all of them) do not scale at all according to the screen size that the user has.

Media Queries have not been used at all in this project, the responsiveness that is present is mainly achieved through the usage of %, vw, vh and vmin to determine the size of the different components. 

The form layout in the risk-page.component.html file (src/app/containers/risk-page/risk-page.component.html) can possibly be structured in a more conventional way.

There is no binding to different risk assessments in the stats-overview-page.component.html file (src/app/containers/stats-overview-page/stats-overview-page.component.html). Everything is hardcoded.

There is no user login, so one needs to configure the app to first have a login function and then bind the relevant data to the particular user that is currently using the application. 

There are also, most likely, several minor errors and bugs that I have not been able to find and properly resolve.
