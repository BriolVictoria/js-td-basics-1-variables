/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.

const poidsMark = 50;
const poidsJohn = 103;

const tailleMark = 1.75;
const tailleJohn = 1.80;

// 2. Calculez le BMI de chacun.

const bmiMark = poidsMark / (tailleMark * tailleMark);

console.log(`bmi mark = ${bmiMark}`);


const bmiJohn = poidsJohn / (tailleJohn * tailleJohn);
console.log(`bmi john = ${bmiJohn}`);

// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.

const isMarkBiggerThanJohn = bmiMark > bmiJohn;

// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de Mark est plus élevé que celui de John ? true").
console.log("Est-ce que le BMI de Mark est plus élevé que celui de John ?" + isMarkBiggerThanJohn);
console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${isMarkBiggerThanJohn}`);


if (bmiMark > bmiJohn) {
    console.log('Mark a un BMI plus élevé que celui de John.');

    if (bmiMark < 18) {
        console.log('Mark (BMI<18) : ' + Math.trunc(bmiMark));
    } else if (bmiMark < 25) {
        console.log('Mark (BMI<25) : ' + Math.trunc(bmiMark));
    } else if (bmiMark < 35) {
        console.log('Mark (BMI <35) : ' + Math.trunc(bmiMark));
    } else {
        console.log('Mark (BMI >35) : ' + Math.trunc(bmiMark));
    }
} else {
    console.log('john a un BMI plus élevé que celui de Mark');

    if (bmiJohn < 18) {
        console.log('Mark (BMI<18) : ' + Math.trunc(bmiJohn));
    } else {
        if (bmiJohn < 25) {
            console.log('Mark (BMI<25) : ' + Math.trunc(bmiJohn));
        } else {
            if (bmiJohn < 35) {
                console.log('Mark (BMI <35) : ' + Math.trunc(bmiJohn));
            } else {
                console.log('Mark (BMI > 35) : ' + Math.trunc(bmiJohn));
            }
        }
    }
    switch (bmiJohn) {
        case (bmiJohn < 18):
            console.log('Mark (BMI<18) : ' + Math.trunc(bmiJohn));
            break;
        case (bmiJohn < 25):
            console.log('Mark (BMI<25) : ' + Math.trunc(bmiJohn));
            break;
        case (bmiJohn < 35):
            console.log('Mark (BMI <35) : ' + Math.trunc(bmiJohn));
            break;
        // éviter qu'on passe à travers

        default:
            // le cas de procédure par défaut, s'applique si aucune des autres valeurs n'est faites
            console.log('Mark (BMI > 35) : ' + Math.trunc(bmiJohn));

    }
}


//
// BONNE CHANCE 😀






