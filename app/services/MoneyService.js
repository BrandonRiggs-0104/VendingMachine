import { AppState } from "../AppState.js";

class MoneyService {
  addMoney() {
    AppState.money += .25
    console.log('did the money go up?', AppState.money);
  }
}

export const moneyService = new MoneyService()