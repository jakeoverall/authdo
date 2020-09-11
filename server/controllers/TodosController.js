import { Auth0Provider } from "@bcwdev/auth0provider";
import { todosService } from "../services/TodosService";
import BaseController from "../utils/BaseController";

export class TodosController extends BaseController {
  constructor() {
    super("api/todos");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserTodos)
      .post("", this.createTodo);
  }
  async getUserTodos(req, res, next) {
    try {
      let todos = await todosService.getTodosByCreator(req.userInfo.email)
      return res.send(todos);
    } catch (error) {
      next(error);
    }
  }
  async createTodo(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let todo = await todosService.createTodo(req.body)
      res.send(todo)
    } catch (error) {
      next(error);
    }
  }
}
