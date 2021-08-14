# Angular ngIf : Guide completomprendre-ngif-angular
Apprenez toutes les fonctionnalités disponibles dans ngIf, apprenez la meilleure façon de l'utiliser pour consommer des Observables, évitez un anti-modèle commun.

## Résumé de NgIf
Dans cet article, nous allons couvrir toutes les fonctionnalités dont nous disposons pour utiliser la directive principale Angular <code>ngIf</code>.

Outre les fonctionnalités les plus couramment utilisées, nous allons apprendre à éviter un **anti-pattern** <code>ngIf</code> potentiel que nous pourrions rencontrer tout en développant des écrans d'interface utilisateur plus complexes qui consomment beaucoup de données observables provenant de différentes sources <code>(backend, services observables, magasins , etc.)</code>.

## Table des matières
Dans cet article, nous aborderons les sujets suivants :
* Qu'est-ce qu'Angular <code>ngIf</code> ?
* Comment <code>ngIf</code> se compare-t-il au masquage d'éléments à l'aide de CSS ?
* Quel type d'expressions <code>ngIf</code> peut-il accepter ?
* La syntaxe <code>ngIf else</code>
* La syntaxe <code>ngIf if then else</code>
* Consommer des données observables avec <code>ngIf</code> et le <code>async pipe</code>
* Un potential anti-pattern potentiel lors de la consommation de données **observables** avec <code>ngIf</code>
* Le modèle Single Data Observable
* Comment <code>ngIf</code> fonctionne-t-il sous le capot ?
* Résumé

Cet article est la traduction la série en cours sur les fonctionnalités d'Angular Core, vous pouvez trouver tous les articles disponibles [ici](https://blog.angular-university.io/tag/angular-core/).

Alors sans plus tarder, commençons à apprendre tout ce que nous devons savoir sur Angular ngIf !

## Qu'est-ce qu'Angular ngIf ?
Même si HTML est aussi un langage de programmation à part entière, il n'a pas d'instruction if, contrairement par exemple à Javascript.

La directive Angular ngIf fonctionne essentiellement comme une instruction if pour HTML, ajoutant cette fonctionnalité manquante au langage sous la forme de l'attribut spécial ngIf.

>La directive Angular ngIf fonctionne essentiellement comme une instruction if pour HTML, ajoutant cette fonctionnalité manquante au langage sous la forme de l'attribut spécial ngIf.

Nous devons passer une condition à <code>ngIf</code>, pour que cela fonctionne. Voici quelques exemples:

![ngif](images/ngif.png)

Dans cet exemple, le container div ne sera affiché que si la variable nom est défini , sinon tout le contenu du div ne sera pas visible.
### Et si je n'ai aucun endroit pratique pour appliquer ngIf ?
Dans le cas des éléments **container**, s'il n'y a pas de **container** disponible pour la section que nous voulons afficher ou masquer, nous n'avons pas besoin de créer un **container div** juste pour pouvoir appliquer <code>ngIf</code>.

Au lieu de cela, nous pouvons appliquer <code>ngIf</code> au-dessus de la directive <code>ng-container</code>. Cela affichera ou masquera le contenu de <code>ng-container</code>, sans avoir à créer un **div** supplémentaire juste pour cela :

