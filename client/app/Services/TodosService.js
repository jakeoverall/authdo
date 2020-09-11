import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

let url = "api/todos/";

class TodosService {
  async getTasks() {
    let res = await api.get(url);
    ProxyState.todos = res.data.map((t) => new Todo(t));
  }

  async addTask(task) {
    let res = await api.post(url, task);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)];

  }

  async toggleTaskStatus(id) {
    let todo = await ProxyState.todos.find((todo) => todo.id == id);
    if (todo.completed == false) {
      todo.completed = true;
      await api.put(url + id, todo);
    } else {
      todo.completed = false;
      await api.put(url + id, todo);
    }
    console.log(todo);
    ProxyState.todos = ProxyState.todos;
  }

  async removeTask(id) {
    let res = await api.delete(`/todos/${id}`);
    let index = ProxyState.todos.findIndex((t) => t.id == id);
    if (index == -1) {
      throw new Error("Invalid Id");
    }
    ProxyState.todos.splice(index, 1);
    ProxyState.todos = ProxyState.todos;

  }
}

export const todosService = new TodosService();
