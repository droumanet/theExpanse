class Surprise {
    constructor(desc, x, y, Good, End, bonus) {
        this.description = desc
        this.x = x
        this.y = y
        // convention : c'est mauvais si Good = 0, c'est bon si Good = 1
        //              ça continue si End = 0, ça arrête le jeu si End = 1
        // pour le fun, on colle Good et End dans une seule variable pour utiliser les masques
        this.fin = Good + End<<1
        this.nbreHeure = bonus
    }

    // Methodes
    setLog(texte) {
        this.descLog = texte
    }
    isGood() {
        return fin & 0x01
    }
    isEnd() {
        return fin>>1 & 0x1
    }
}