import { userService } from "../Services/UserService.js"
import { Pop } from "../Utils/Pop.js"

export class UserController {
  constructor() {
    console.log('hello from uc')
    this.enterUserName()
  }
  async enterUserName() {
    console.log('logging in')
    let input = await Pop.prompt("Speak your name!")
    if (!input) return
    userService.enterUserName(input)
  }
}