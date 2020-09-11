import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TodosService {


  async getTodosByCreator(email) {
    return await dbContext.Todos.find({ creatorEmail: email })
  }

  async find(query = {}) {
    let todos = await dbContext.Todos.find(query);
    return todos;
  }
  async findById(id) {
    let todo = await dbContext.Todos.findById(id);
    if (!todo) {
      throw new BadRequest("Invalid Id");
    }
    return todo;
  }

  async createTodo(todoData) {
    return await dbContext.Todos.create(todoData)
  }
}

export const todosService = new TodosService()