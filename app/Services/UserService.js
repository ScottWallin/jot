import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";

class UserService {
  enterUserName(input) {
    appState.userName = input
    console.log('appstate user', appState.userName)

  }
}

export const userService = new UserService()