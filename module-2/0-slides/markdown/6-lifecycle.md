# Lifecycle

## OnInit
* appelé après le constructeur
* privilégier cette méthode pour appeler des services ou s'abonner à des observables
* 

## OnDestroy
* peut être utilisé pour désallouer des ressources
* unsubscribe sur les observables qui auraient été souscrits dans le code
* ex: autocomplete 


## DoCheck
* appelé énormément de fois, à chaque évènement du DOM en fait
* à utiliser très prudemment seulement si Angular ne détecte pas un changement particulier
* utilisé pour le déboggage

## OnChanges
* à chaque évènement qui va effectuer une màj du composant
* utilisé pour le déboggage... pas d'autres idées 

## AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
* voir la doc!