import { AuthController } from "./Controllers/AuthController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  authController = new AuthController();
  todoController = new TodosController()
}

window["app"] = new App();
