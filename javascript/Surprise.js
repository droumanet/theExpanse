class Surprise {
    constructor(desc, x, y, Good, End, bonus) {
        this.description = desc
        this.x = x
        this.y = y
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