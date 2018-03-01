## Outils à installer

   * Visual Studio Code + extensions eslint + tslint
   * Chrome
   * client Git
   * Se connecter au channel Slack :
https://join.slack.com/t/cgi-formation-angular/shared_invite/enQtMzIyMzY5MzkzNzQ5LTQ5ZDRiNTA5NDA4NzZlNjczNzk2MjJmNjQyOGIzZjVkMGI2MDU3NjJlNTAyNGVhMWRkYzkyZDRlNjc5OTU5MzA
 
   * node 8.7+
   * npm 5.6.0+
      * mise à jour:
`npm install npm@latest -g `

   * yarn 1.3.2+ 
`npm install yarn@latest -g `

   * @angular/cli 1.6.8
`npm install @angular/cli -g ` 



## Troubleshooting

* powershell ou vscode pour l'installation de @angular/cli
```
    Jeton non reconnu dans le texte source.
    Au niveau de ligne : 1 Caractère : 16
    + npm install -g  <<<< @angular/cli
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : UnrecognizedToken
```
*lancer la commande dans un cmd*
	
* sur les PC Michelin
```
	npm ERR! path C:\projects\github\formation-javascript-angular\module-3\hold-the-dom\node_modules\fsevents\node_modules\getpass\nod
	e_modules
	npm ERR! code EPERM
	npm ERR! errno -4048
	npm ERR! syscall lstat
```
*vérifier que vous êtes en npm 5.6+ ou essayer yarn*


