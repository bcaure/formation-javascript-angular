## Standard web component

* shadow DOM (isolation CSS)
* template (html caché, réutilisable)
* custom element


## Angular component

### Création d'un composant de présentation
ng generate component characters-grid --module app.module.ts

* 1 html, 1 css, 1 ts
  * @Component
  * selector, template, style
  * controller
* 1 test karma
* ajout au module

### transclusion avec ngContent
* quand on veut passer du contenu HTML à un composant 
* exemple avec angular-material
```
      <mat-grid-list cols="7" rowHeight="2:1" gutterSize="20px">
        <mat-grid-tile *ngFor="let character of charactersAsync">
          <!-- <ng-content> --> 
          <div [ngClass]="{'char-card': true, 'female': character.isFemale}">
            {{ character.name }}
          </div>
          <!-- </ng-content> --> 
        </mat-grid-tile>
      </mat-grid-list>
```



