/* Jeu de chasse au Trésor, version Espace
*/
let nbCaseX = 10
let nbCaseY = 10
let nbCase = nbCaseX*nbCaseY

let tableEvent = []

// boucle de remplissage du tableau avec des événements de classe Surprise

for (let i=0; i<nbCase*0.1; i++) {
    let temp = new Surprise("test n°"+i, 5, 5, 0, 0, 0)
    tableEvent.push(temp)
}
tableEvent[3].x = 7
tableEvent.push(4)

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
