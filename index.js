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
var Tax = /** @class */ (function () {
    function Tax(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return Tax;
}());
var Worcker = /** @class */ (function (_super) {
    __extends(Worcker, _super);
    function Worcker(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Worcker.prototype.getUtileTasse = function () {
        var utile = this.redditoannuolordo - (this.redditoannuolordo * this.codredd) / 100;
        return utile;
    };
    Worcker.prototype.getTasseIrpef = function () {
        var taxIf = (this.getUtileTasse() * this.tasseirpef) / 100;
        return taxIf;
    };
    Worcker.prototype.getTasseInps = function () {
        var taxIs = (this.getUtileTasse() * this.tasseinps) / 100;
        return taxIs;
    };
    Worcker.prototype.getRedditoNetto = function () {
        this.redditoannuolordo =
            this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
        return this.redditoannuolordo;
    };
    return Worcker;
}(Tax));
var btn = document.querySelector("#calc");
btn.onclick = function () { return calcola(); };
function calcola() {
    var redI = document.querySelector("#reddito");
    var ivaI = document.querySelector("#iva");
    var inpsI = document.querySelector("#inps");
    var irpefI = document.querySelector("#irpef");
    var red = Number(redI.value);
    var iva = Number(ivaI.value);
    var inps = Number(inpsI.value);
    var irpef = Number(irpefI.value);
    var div = document.querySelector("#calcolo");
    var worcker = new Worcker(iva, red, inps, irpef);
    var h4 = document.createElement("h4");
    h4.innerText = "L'utile annuo \u00E8 ".concat(worcker.getUtileTasse(), "\u20AC");
    var Inps = document.createElement("h4");
    Inps.innerText = "Devi dare ".concat(worcker.getTasseInps(), "\u20AC di tasse INPS");
    var Irpef = document.createElement("h4");
    Irpef.innerText = "Devi dare ".concat(worcker.getTasseIrpef(), "\u20AC di tasse IRPEF ");
    var RedNet = document.createElement("h4");
    RedNet.innerText = "Il Reddito netto annuo \u00E8 di ".concat(worcker.getRedditoNetto(), "\u20AC");
    div === null || div === void 0 ? void 0 : div.appendChild(h4);
    div === null || div === void 0 ? void 0 : div.appendChild(Inps);
    div === null || div === void 0 ? void 0 : div.appendChild(Irpef);
    div === null || div === void 0 ? void 0 : div.appendChild(RedNet);
    console.log(worcker);
}
