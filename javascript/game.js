/* Ce fichier contient la partie jouable du jeu : 
   - Initialisation du tableau en mémoire
   - Calcul des items (bonus ou malus)
   - traçage du tableau sur la page
   - récupération des coordonnées et décision
*/

// initialisation des variables
let nbCaseX = 10
let nbCaseY = 10
let nbCase = nbCaseX*nbCaseY

let tableEvent = [] // tableau des items

// ---- fonctions -----
function Hasard(max) {
    // cette fonction calcule un nombre entier aléatoire dans l'intervalle 0 à max
    return Math.floor(Math.random() * max)
}

function remplissageTable() {
    // cette fonction créée une liste des items en commençant par le trésor (les autres items doivent éviter ces coordonnées)
    let tresor = new Surprise("vous avez enfin trouvé la protomolécule", Hasard(nbCaseX), Hasard(nbCaseY), 1, 1, 0 )
    tableEvent[0] = tresor
    let nbEvent = nbCase*10/100     // on autorise un max de 10% d'items

    let Good, End, Bonus,cx, cy, temp, phrase
    let phraseGood=["Vous avez de la chance, vous trouvez un indice qui vous fait gagner un peu de temps", "C'est l'indice qui vous manquait pour vous rapprocher du but", "Hey ! il ne faut jamais lâcher une intuition"]
    let phraseBad =[]

    // remplissage
    for (let i=1; i<nbEvent; i++) {
        Good = Hasard(1)
        End  = Hasard(1)
        cx   = Hasard(nbCaseX)
        cy   = Hasard(nbCaseY)
        Bonus= Hasard(3)

        // si Good, on pioche une phrase cool et on enlève du temps (calcul se fera pendant le jeu)
        if (Good) {
            phrase = phraseGood[Hasard(phraseGood.length)]
            temp = new Surprise(phrase, cx, cy, Good, End, -bonus)
        } else {
            phrase = phraseGood[Hasard(phraseBad.length)]
            temp = new Surprise(phrase, cx, cy, Good, End, bonus)
        }
        tableEvent.push(temp)
    }
    tableEvent[3].x = 7
    tableEvent.push(4)
}

// TODO: faire un switch/case sur le bonus... 0 indice ne vaut rien, 1 favorise un écart calculé, 2 et 3 pour un indice X ou Y
// TODO: si Good n'est pas bon, 1 est un contrôle ceinturien, 2 est un abordable pirate, 3 est un assaut martiengit push 

monNombre = "7"
// affichage du contenu de la collection (liste)
console.log("Lecture")
tableEvent.forEach(element => {
    console.log(typeof(element))
    console.log(element.description+" aux coordonnées "+element.x+","+element.y)
    if (element.x == monNombre) {
        console.log("Gagné, les valeurs sont égales")
    }
    if (element.x === monNombre) {
        console.log("Gagné, les types sont égaux")
    }  
}); 
