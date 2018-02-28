## Créer l'app
```
ng new hold-the-door --skip-install --skip-tests --style=scss
cd hold-the-door
echo https-proxy=http://fr-proxy.groupinfra.com:3128 > .npmrc
echo proxy=http://fr-proxy.groupinfra.com:3128 >> .npmrc
npm install
ng serve --open
``` 

* vérifier que l'appli s'affiche et arrêter node
* si on veut passer en appli "normale" avec webpack & co, par ex pour l'installer sur un serveur, il faut se passer d'Angular cli: 
===> Attention ne pas le faire pour le moment!
```
   ng eject
```  

## Importer les éléments du module 1

* copier répertoire data et model
* ouvrir src/app/app.component.js
* importer les données de data comme attribut du controller

## Installer Angular material
* yarn add @angular/material @angular/cdk @angular/animations

* importer un theme existant dans style.scss 
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
  
* ng serve --open 
 ===> vérifier le rendu