## Créer l'app

### Réseau sans proxy : 

```
ng new hold-the-dom --skip-tests --style=scss
cd hold-the-dom
ng serve --open
``` 

### Réseau CGI :
```
ng new hold-the-dom --skip-install --skip-tests --style=scss
cd hold-the-dom
echo https-proxy=http://fr-proxy.groupinfra.com:3128 > .npmrc
echo proxy=http://fr-proxy.groupinfra.com:3128 >> .npmrc
npm install
ng serve --open
``` 

* vérifier que l'appli s'affiche et arrêter node

### si on veut packager l'appli pour l'installer sur un serveur
il faut se passer d'@angular/cli pour générer le fichier webpack 
===> Attention ne pas le faire pour la formation
```
   ng eject
```  

## Importer les éléments du module 1

* copier répertoire data et model
* ouvrir src/app/app.component.js
* importer les données de data comme attribut du controller

## Installer Angular material

* ajouter les dépendances
	```
	 npm install --save @angular/material @angular/cdk @angular/animations
	```

* importer un theme existant dans style.scss 
  ``` 
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
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

  
* ng serve --open 
 ===> [vérifier le rendu](./install-ng-material.PNG)

## *Faire un git commit*
Ce sera plus facile de voir les fichiers que l'on va générer avec ng



## TODO

mieux expliquer ngtemplateoutlet

databinding => commencer par ngmodel angularJS sur le site

mettre [value]  

evenemetn utiliateur??

trouver un ex pour le change detection amélioré

ne pas parler de zone.js

change detection => le digest ne sera pas appelé si une lib externe n'utilise pas les mécanismes angular

lifecycle 
=> dans le  oninit d'un composant enfant, on est sûr que les attributes sont bindés à ce moment là
