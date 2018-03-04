## Angular templates
* ouvrir src/app/app.component.html
* la moustache (dans la doc: "template expression"  "interpolation") 
    * pas de changement avec AngularJS
    * pas de modif dans la moustache
    * opérateur ternaire OK
    * opérations arithmétiques OK
    * concaténation OK

* structural directives "*"
    * *ngIf, *ngFor, [ngSwitch] : 1 seule directive par élément

_Exercice 1_

* attribute directives   
    * ngStyle, ngClass

_Exercice 2_


    * utiliser <ng-container> pour combiner 2 directives de façon transparente pour le DOM
    * quand on ne veut pas créer un composant à part entière : <ng-template> <ng-templateOutlet>
```
    <ng-template #toto let-lessonsCounter="estimate">
        <div> Approximately {{lessonsCounter}} lessons ...</div>
    </ng-template>
    <ng-container *ngTemplateOutlet="toto;context:ctx"></ng-container>

    ....

    tx = {estimate: this.totalEstimate};
```

_Exercice 3_
