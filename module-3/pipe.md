Pipe (1h)
Le pipe permet de transformer les valeurs affichés déclarés dans les templates
Concrètement, on l'appelait filter en AngularJS, on l'appelle pipe maintenant.
On a des des pipes qui permettent de présenter des dates, uppercase, currency.
Il présente quelques avantages supplémentaires :
Built-in pipes : comme le pipe async, decimal ou percent.
Certains pipes sont paramétrables
Les pipes sont chainables.
On peut également créer ses propres pipes
On peut filtrer sur les pipes
Il existe les pipes pures et impures. Angular execute une pipe pure quand il détecte un changement de valeur sur un input de type primitif (String, Number, Boolean...) ou une référence d'objet (Date, Array...)

Le pipe async

https://angular.io/guide/pipes
https://blog.imaginea.com/pipe-vs-filter-in-angular-js/