// Celsius - Fahrenheit
/*
- Initialisez une variable celsius avec une valeur de votre choix en degrés Celsius (par exemple, 25).
- Calculez la température équivalente en degrés Fahrenheit et stockez-la dans une variable fahrenheit en utilisant la formule : fahrenheit = (celsius * 9/5) + 32.
- Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console en utilisant une phrase descriptive.
- Modifiez la valeur de la variable celsius et répétez le calcul et l'affichage pour voir la conversion avec une autre température.
*/

// Initialisez la variable celsius avec une valeur de votre choix

const myConst = "30°C"
console.log(myConst)

// Calculez la température équivalente en degrés Fahrenheit et stockez-la dans la variable fahrenheit

const farenheit =  (30*1.8)+32;
console.log(farenheit)

// Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console
// en utilisant une phrase descriptive

const degre="30°" + "(30*1.8)+32";
console.log(`${myConst} et sa conversion en defrés Fahrenheit ${farenheit}`)


// Modifiez la valeur de la variable celsius

const celsius="40°"
console.log(celsius)

// Répétez le calcul et l'affichage pour voir la conversion avec une autre température

const fahrenheit = (40*1.8)+32
console.log(fahrenheit)