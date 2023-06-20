import { AppState } from "../AppState.js"

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl

  }
  get Template() {
    return `        <div class="col-3">
    <div><button><img class="img-fluid w-50 h-25"
          src="${this.imgUrl}">
        <p>${this.name}</p>
        <p>${this.price}</p>
      </button></div>
  </div>`
  }
}
