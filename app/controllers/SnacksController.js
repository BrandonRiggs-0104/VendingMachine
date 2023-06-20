import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawSnack() {
  const snacks = AppState.snacks
  let template = ''
  snacks.forEach(snack => template += snack.Template)
  setHTML('snack-list', template)
  // AppState.snacks.forEach(snack => {
  //   setText('snack', snack.price)
  // })
  // // setText('snack', AppState.snacks[0].price)
}
export class SnackController {
  constructor() {
    console.log('Snack controller is working');
    _drawSnack()
  }

}