### Créer l'app
* ng new hold-the-door
* cd hold-the-door
* ng serve --open

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



## Standard web component
* shadow DOM (isolation CSS)
* template (html caché, réutilisable)
* custom element

## Angular component
### Création
* 1 html, 1 css, 1 js
* @Component
* selector, template, style
* controller




