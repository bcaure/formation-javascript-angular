## Créer l'app
* pré-requis : 
   * node 8.7+
   * npm 5.6.0+ 
   * yarn 1.3.2+ 
   * @angular/cli 1.6.8
* ng new hold-the-door
* cd hold-the-door
* ng serve --open
* vérifier que l'appli s'affiche et arrêter node

### Importer les éléments du module 1

* copier répertoire data et model
* ouvrir src/app/app.component.js
* importer les données de data comme attribut du controller

### Installer Angular material
* yarn add @angular/material @angular/cdk @angular/animations

* renommer styles.css en style.scss et mettre à jour la référence dans .angular-cli.json
  ``` 
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
  ```
  
* copier dans app.component.html
  ```
  <mat-grid-list cols="4" rowHeight="2:1" gutterSize="20px">
    <mat-grid-tile [style.background]="'lightblue'">toto</mat-grid-tile>
    <mat-grid-tile>titi</mat-grid-tile>
    <mat-grid-tile [style.background]="'lightblue'">tata</mat-grid-tile>
    <mat-grid-tile>tonton</mat-grid-tile>
    <mat-grid-tile>tutu</mat-grid-tile>
    <mat-grid-tile [style.background]="'lightblue'">tati</mat-grid-tile>
    <mat-grid-tile>prout</mat-grid-tile>
  </mat-grid-list>
  ```  
  
* rajouter le module grid dans app.module.ts:

  ```
    import { MatGridListModule } from '@angular/material/grid-list';
    @NgModule({
    ...
    imports: [MatGridListModule],
    ...
    })
  ```
  
* vérifier le rendu

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





