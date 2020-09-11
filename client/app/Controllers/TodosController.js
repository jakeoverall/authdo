import { ProxyState } from "../AppState.js";
import { AuthService } from "../Services/AuthService.js";
import { todosService } from "../Services/TodosService.js";

function _drawTasks() {
  let template = "";
  ProxyState.todos.forEach((t) => (template += t.taskTemplate));
  document.getElementById("tasks").innerHTML = template;
}

export default class TodosController {
  constructor() {
    AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, () => {
      ProxyState.on("todos", _drawTasks);
    })
  }

  addTask(e) {
    e.preventDefault();
    let form = e.target;
    let newTask = {
      description: form.task.value,
    };
    form.reset();
    try {
      todosService.addTask(newTask);
    } catch (error) {
      console.error(error);
    }
  }

  toggleTaskStatus(id) {
    try {
      todosService.toggleTaskStatus(id);
    } catch (error) {
      console.error(error);
    }
  }

  removeTask(id) {
    try {
      todosService.removeTask(id);
    } catch (error) {
      console.error(error);
    }
  }

  toggleList() {
    let elem = document.getElementById("todo");
    let res = elem.classList.contains("invisible");

    if (res == true) {
      elem.classList.remove("invisible");
    } else if (res == false) {
      elem.classList.add("invisible");
    }
  }
}