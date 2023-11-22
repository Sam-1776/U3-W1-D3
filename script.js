var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utile = this.redditoannuolordo - (this.redditoannuolordo * this.codredd) / 100;
        return utile;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    Lavoratore.prototype.getRedditoNetto = function () {
        this.redditoannuolordo = (this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps());
        return this.redditoannuolordo;
    };
    return Lavoratore;
}(Tasse));
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Professionista.prototype.getTasseIrpef = function () {
        var taxIf = (this.getUtileTasse() * this.tasseirpef) / 100;
        return taxIf;
    };
    Professionista.prototype.getTasseInps = function () {
        var taxIs = (this.getUtileTasse() * this.tasseinps) / 100;
        return taxIs;
    };
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Artigiano.prototype.getTasseIrpef = function () {
        var taxIf = (this.getUtileTasse() * this.tasseirpef) / 100;
        return taxIf;
    };
    Artigiano.prototype.getTasseInps = function () {
        var taxIs = (this.getUtileTasse() * this.tasseinps) / 100;
        return taxIs;
    };
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Commerciante.prototype.getTasseIrpef = function () {
        var taxIf = (this.getUtileTasse() * this.tasseirpef) / 100;
        return taxIf;
    };
    Commerciante.prototype.getTasseInps = function () {
        var taxIs = (this.getUtileTasse() * this.tasseinps) / 100;
        return taxIs;
    };
    return Commerciante;
}(Lavoratore));
var dev = new Professionista(22, 70000, 5, 25);
console.log('Developer');
console.log(dev.getUtileTasse());
console.log(dev.getTasseInps());
console.log(dev.getTasseIrpef());
console.log(dev.getRedditoNetto());
var tatoo = new Artigiano(22, 200000, 19, 15);
console.log('Tatutatore');
console.log(tatoo.getUtileTasse());
console.log(tatoo.getTasseInps());
console.log(tatoo.getTasseIrpef());
console.log(tatoo.getRedditoNetto());
var panificio = new Commerciante(22, 200000, 15, 35);
console.log('Panificio');
console.log(panificio.getUtileTasse());
console.log(panificio.getTasseInps());
console.log(panificio.getTasseIrpef());
console.log(panificio.getRedditoNetto());
