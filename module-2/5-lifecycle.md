# Lifecycle

## OnInit
* appelé après le constructeur
* privilégier cette méthode pour appeler des services ou s'abonner à des observables

## OnDestroy
* peut être utilisé pour désallouer des ressources
* unsubscribe sur les observables
* libérer de la mémoire en vidant un state qui serait partagé

## DoCheck
* appelé énormément de fois, à chaque évènement du DOM en fait
* à utiliser très prudemment seulement si Angular ne détecte pas un changement particulier

## OnChanges
* à chaque modification d'un input

## AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
* voir la doc!