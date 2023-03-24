

# Angular Framework

> 5 Concepts fondamentaux et 19 décorateurs *pour faciliter le développement selon les principe SOLID*

* S ingle Responsability
* Open / Close
* Subsitution
* Interface Segregation
* Dependency Inversion

# Concept fondamentaux

* Injectable
* NgModule
  * Directive
  * Pipe
  * Component

## BP Component

* Pas d'intelligence partagée
* Petit template ( décomposer )
* PEU mais alors TRES PEU d'injection !!!!!!!!!! 

## Décorateurs

Création

* `@Injectable`
* `@NgModule`
    * `@Component`
    * `@Pipe`
    * `@Directive`

Communication

* `@ViewChild` ?
* `@ViewChildren` ?
* `@Input`
* `@Ouput`
* `@ContentChild`
* `@ContentChildren`
* `@Attribute`
* `@HostListener`
* `@HostBinding`

Injection

* `@Inject`
* `@Optional`
* `@Self`
* `@SkipSelf`
* `@Host`


## Application Structure

>  Créer de module selon le role de leur contenu

https://angular.io/guide/module-types

* RootModule - (AppRoot) - Boottraping module
* FeatureModule - Composant fonctionnelle (utilisation des services)
* RoutedModule (eg. ViewModule) - Composant de routage
* ServiceModule (eg. CoreModule) - Ensemble de service
* SharedModule - Module utilitaire de partage des ressources communes
* RoutingModule - Definition de routes


# Axe Amélioration

* Passer classe en interface
* Dissocier les services (SRC)
* Extraire logique des composnant 
* Réduire les injection ( facade )

