// import { ValuesController } from "./Controllers/ValuesController.js";
import { NotepadsController } from "./Controllers/NotepadsController.js";
class App {
  // valuesController = new ValuesController();
  notepadsController = new NotepadsController();
}

window["app"] = new App();
