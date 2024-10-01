// Permutation de variables

// Solution classique utilisant une variable temporaire

let a = 4;
let b = 6;
let c;

c = a;
console.log('c=a');
console.log(`c est égal a ${c}`)

a = b;
console.log('a=b')
console.log(`a est égal a ${a}`)
console.log(`b est égal a ${b}`)

b = c;
console.log('b=c')
console.log(`b est égal a ${b}`)


// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
