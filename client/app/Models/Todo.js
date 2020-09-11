export default class Todo {
  constructor({ completed, _id, description }) {
    this.completed = completed;
    this.id = _id;
    this.description = description;
  }

  get taskTemplate() {
    return /*html*/`

    <li class="">
      ${this.toggleChecked}  ${this.description}
      <span class="pointer" onclick="app.todosController.removeTask('${this.id}')"><i class="fa fa-recycle" aria-hidden="true"></i>
      </span>
    </li>`;
  }

  get toggleChecked() {
    if (this.completed == true) {
      return `<input class="pointer" type="checkbox" name="completed" id="checkbox" checked onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    } else {
      return `<input class="pointer" type="checkbox" name="completed" id="checkbox" onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    }
  }
}