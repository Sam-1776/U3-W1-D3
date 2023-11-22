abstract class Tasse {
    codredd: number; 
    redditoannuolordo:number; 
    tasseinps:number; 
    tasseirpef:number;
    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef
    }

    abstract getUtileTasse(): number;
    abstract getTasseInps():number; 
    abstract getTasseIrpef():number;
}


class Lavoratore extends Tasse{
    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef)
    }
    getUtileTasse (){
		const utile = this.redditoannuolordo - (this.redditoannuolordo * this.codredd) / 100
        return utile
	}

	getTasseIrpef() {
		return this.tasseirpef
	}

	getTasseInps() {
		return this.tasseinps
	}

	getRedditoNetto() {
        this.redditoannuolordo = (this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps());
        return this.redditoannuolordo
	}
}

class Professionista extends Lavoratore{
    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef)
    }
    getTasseIrpef(): number {
        const taxIf =  (this.getUtileTasse() * this.tasseirpef)/100
        return taxIf
    }
    getTasseInps(): number {
        const taxIs = (this.getUtileTasse() * this.tasseinps)/100
        return taxIs
    }

}
class Artigiano extends Lavoratore{
    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef)
    }
    getTasseIrpef(): number {
        const taxIf =  (this.getUtileTasse() * this.tasseirpef)/100
        return taxIf
    }
    getTasseInps(): number {
        const taxIs = (this.getUtileTasse() * this.tasseinps)/100
        return taxIs
    }

}
class Commerciante extends Lavoratore{
    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef)
    }
    getTasseIrpef(): number {
        const taxIf =  (this.getUtileTasse() * this.tasseirpef)/100
        return taxIf
    }
    getTasseInps(): number {
        const taxIs = (this.getUtileTasse() * this.tasseinps)/100
        return taxIs
    }

}

let dev = new Professionista(22, 70000, 5, 25)
console.log('Developer');
console.log(dev.getUtileTasse());
console.log(dev.getTasseInps());
console.log(dev.getTasseIrpef());
console.log(dev.getRedditoNetto());

let tatoo = new Artigiano(22, 200000, 19, 15)
console.log('Tatutatore');
console.log(tatoo.getUtileTasse());
console.log(tatoo.getTasseInps());
console.log(tatoo.getTasseIrpef());
console.log(tatoo.getRedditoNetto());

let panificio = new Commerciante(22, 200000, 15, 35)
console.log('Panificio');
console.log(panificio.getUtileTasse());
console.log(panificio.getTasseInps());
console.log(panificio.getTasseIrpef());
console.log(panificio.getRedditoNetto());


