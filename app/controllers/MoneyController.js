import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
  setText('money', AppState.money.toFixed(2))
}


export class MoneyController {
  constructor() {
    console.log('Money controller is working');
    _drawMoney()
    AppState.on('money', _drawMoney)
  }
  addMoney() {
    console.log('button click');
    moneyService.addMoney()
  }
}
