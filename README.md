# Classapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Implemented Features

### Home page
The home page is currently a single image which looks good with the black and white UI. Depending on the product selected, this may be changed to something more relevant or copy.

### Product page
The Product page dynamically tiles product cards into the available space on the page. Currently, the number of cards is fixed at ten, and when the screen cannot accommodate that many tiles, they are not handled correctly. This will be fixed by changing the number of active tiles.

### Checkout page
The checkout page is currently displaying four product cards as an example, but it needs to handle any number of purchased items in sensible manner. 

### Login page
The login page design needs to be reworked, and of course, it currently does not have functionality. 

### Navigation Bar
The navigation bar is implemented as a separate component, which should make modifying it more straight forward. It currently does not scale or collapse dynamically. It needs to be designed to handle mobile screens.

### Product Cards
The product cards are implemented as a separate component, and can be changed without affecting the rest of the site. They need a details link and data.

