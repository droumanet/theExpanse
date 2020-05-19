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
    // cette fonction créée une liste des items en finissant par le trésor
    let nbEvent = nbCase*10/100     // on autorise un max de 10% d'items

    let Good, End, Bonus,cx, cy, temp, phrase
    let phraseGood=["Vous avez de la chance, vous trouvez un indice qui vous fait gagner un peu de temps", "C'est l'indice qui vous manquait pour vous rapprocher du but", "Hey ! il ne faut jamais lâcher une intuition"]
    let phraseBad =["Une patrouille de l'APE tente de vous contrôler", "Un vaisseau de guerre Martiens tente de vous accoster", "Il semble que la Terre soit sur le point de tirer sur le Rocinante, il faut les semer"]

    // remplissage
    for (let i=0; i<nbEvent; i++) {
        Good = Hasard(2)
        End  = Hasard(2)
        console.log(Good+","+End)
        cx   = Hasard(nbCaseX)
        cy   = Hasard(nbCaseY)
        Bonus= Hasard(4)

        // si Good, on pioche une phrase cool et on enlève du temps (calcul se fera pendant le jeu)
        if (Good) {
            phrase = phraseGood[Hasard(phraseGood.length)]
            temp = new Surprise(phrase, cx, cy, Good, End, -Bonus)
        } else {
            phrase = phraseBad[Hasard(phraseBad.length)]
            temp = new Surprise(phrase, cx, cy, Good, End, Bonus)
        }
        tableEvent.push(temp)
    }
    // maintenant, le choix du trésor (bien comprendre qu'il peut écraser un item existant)
    cx   = Hasard(nbCaseX)
    cy   = Hasard(nbCaseY)
    tableEvent.push(new Surprise("Voilà enfin cette satanée protomolécule, bien joué !", cx, cy, 1,1,0))
}

// TODO: faire un switch/case sur le bonus... 0 indice ne vaut rien, 1 favorise un écart calculé, 2 et 3 pour un indice X ou Y
// TODO: si Good n'est pas bon, 1 est un contrôle ceinturien, 2 est un abordable pirate, 3 est un assaut martiengit push 


// affichage du contenu de la collection (liste)
remplissageTable()
console.log("Lecture")
tableEvent.forEach(element => {
    console.log(typeof(element))
    console.log(element.description+" aux coordonnées "+element.x+","+element.y)
}); 
