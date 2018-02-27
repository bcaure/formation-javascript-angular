# Lifecycle

## Implementer les interfaces suivantes dans le composant character:

OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy


## Dans chaque méthode onXXX afficher le nom de la méthode dans la console

## DoCheck
=> appelé énormément de fois, à chaque évènement du DOM en fait
=> à utiliser très prudemment seulement si Angular ne détecte pas un changement particulier

## OnChanges
=> à chaque modification d'un input
=> on peut mettre automatiquement un texte en majuscule par exemple
