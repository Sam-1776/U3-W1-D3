abstract class Tax {
  codredd: number;
  redditoannuolordo: number;
  tasseinps: number;
  tasseirpef: number;
  constructor(
    _codredd: number,
    _redditoannuolordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    this.codredd = _codredd;
    this.redditoannuolordo = _redditoannuolordo;
    this.tasseinps = _tasseinps;
    this.tasseirpef = _tasseirpef;
  }

  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
}

class Worcker extends Tax {
  constructor(
    _codredd: number,
    _redditoannuolordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
  }
  getUtileTasse() {
    const utile =
      this.redditoannuolordo - (this.redditoannuolordo * this.codredd) / 100;
    return utile;
  }

  getTasseIrpef(): number {
    const taxIf = (this.getUtileTasse() * this.tasseirpef) / 100;
    return taxIf;
  }
  getTasseInps(): number {
    const taxIs = (this.getUtileTasse() * this.tasseinps) / 100;
    return taxIs;
  }

  getRedditoNetto() {
    this.redditoannuolordo =
      this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
    return this.redditoannuolordo;
  }
}

const btn = document.querySelector("#calc") as HTMLButtonElement;

btn.onclick = () => calcola();

function calcola() {
  const redI = document.querySelector("#reddito") as HTMLInputElement;
  const ivaI = document.querySelector("#iva") as HTMLInputElement;
  const inpsI = document.querySelector("#inps") as HTMLInputElement;
  const irpefI = document.querySelector("#irpef") as HTMLInputElement;

  const red = Number(redI.value);
  const iva = Number(ivaI.value);
  const inps = Number(inpsI.value);
  const irpef = Number(irpefI.value);
  const div = document.querySelector("#calcolo");

  let worcker = new Worcker(iva, red, inps, irpef);
  const h4 = document.createElement("h4");
  h4.innerText = `L'utile annuo è ${worcker.getUtileTasse()}€`;
  const Inps = document.createElement("h4");
  Inps.innerText = `Devi dare ${worcker.getTasseInps()}€ di tasse INPS`;
  const Irpef = document.createElement("h4");
  Irpef.innerText = `Devi dare ${worcker.getTasseIrpef()}€ di tasse IRPEF `;
  const RedNet = document.createElement("h4");
  RedNet.innerText = `Il Reddito netto annuo è di ${worcker.getRedditoNetto()}€`;

  div?.appendChild(h4);
  div?.appendChild(Inps);
  div?.appendChild(Irpef);
  div?.appendChild(RedNet);
  console.log(worcker);
}
