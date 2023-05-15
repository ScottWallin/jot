// import { ValuesController } from "./Controllers/ValuesController.js";
import { NotepadsController } from "./Controllers/NotepadsController.js";
import { UserController } from "./Controllers/UserController.js";
class App {
  // valuesController = new ValuesController();
  notepadsController = new NotepadsController();

  userController = new UserController();
}

window["app"] = new App();
