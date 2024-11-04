/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

const myNumber = 4 + 5;
console.log(myNumber)

const otherNumber = "4" + "5";
console.log(otherNumber)

const aOtherNumber = '4' + 5;
console.log(aOtherNumber)

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets

const anOtherNumber = "4 + 5"
console.log(anOtherNumber)