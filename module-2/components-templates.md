### Créer l'app
* ng new hold-the-door
* cd hold-the-door
* ng serve --open
* ng eject

* copier data.js
* ouvrir src/app/app.component.js
* importer data from data.js


## Angular template
* ouvrir src/app/app.component.html
* la moustache => idem AngularJS
    * pas de modif dans la moustache
    * opérateur ternaire OK
* attribute directive    
    * ngStyle, ngClass
    
* structural directives "*"
    * ngIf, ngFor, ngSwitch
    * quand on ne veut pas créer un composant à part entière : ngContainer, ngTemplate, ngTemplateOutlet

## Angular material
* yarn add @angular/material @angular/cdk
* yarn add @angular/animations
* app.module.ts:
  ```
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    @NgModule({
    ...
    imports: [BrowserAnimationsModule],
    ...
    })
  ```
* rename styles.css to style.scss
  ``` 
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
  ```

## Standard web component

* shadow DOM (isolation CSS)
* template (html caché, réutilisable)
* custom element


## Angular component

### Création d'un composant de présenation
ng generate component characters-grid --module app.module.ts

* 1 html, 1 css, 1 ts
  * @Component
  * selector, template, style
  * controller
* 1 test karma
* ajout au module





