
import { CustomHTMLElement } from '../helpers'

export default class MainNavigation extends CustomHTMLElement {

  constructor() {
    super({
      template: function() {
        return `
          <nav>
            <a href="">Home</a>
            <a href="">Page</a>
          </nav>
        `
      }
    })
  }

}
