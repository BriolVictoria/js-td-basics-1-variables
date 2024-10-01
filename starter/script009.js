/*****************************
 * 009 - Mutation de variable et conversion de type
 */

// 1. Initialisez les variables firstName à "John" et age à 28.

const firstName ='john';
const age= 28;


// Conversion de type

// 2. Affichez la phrase "John a 28 ans" en utilisant les variables et affichez le type de cette expression.

console.log(firstName +" a "+ age + " ans ");
console.log(`${firstName} a ${age} ans`);

// 3. Déclarez les variables job et isMarried, puis affectez la valeur "professeur" à job et false à isMarried.
// Ensuite, affichez la phrase "John est un professeur de 28 ans. Est-il marié ? false".
const job="professeur";
const year=28;
const isMarried=false;
console.log(`${firstName} est un ${job} de ${year} ans`);
// Variable mutation

// 4. Affectez la valeur "vingt-huit" à la variable age et la valeur "conducteur"
// à la variable job. Ensuite, affichez la phrase précédente dans une boîte de dialogue.
let age1 = 28;
const age2 = "vingt-huit";
const job2 ="conducteur"
console.log(age1)
console.log(job2)

// 5. Affichez une boîte de dialogue demandant "Quel est son nom de famille ?"
// pour permettre à l'utilisateur d'entrer le nom de famille de John. Stockez ce nom dans une variable lastName,
// puis affichez "Le nom de famille de John est … (le nom
const lastName = prompt("Quel est son nom de famille?")

console.log(`Le nom de famille de John est ${lastName}`)