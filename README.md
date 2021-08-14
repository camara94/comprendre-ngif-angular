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