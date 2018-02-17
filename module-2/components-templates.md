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





