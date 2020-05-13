import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false },
      ],
      newTask: "",
    };
  }

  addNewTask(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  handleClick(event) {
    const index = this.state.tasks.findIndex(
      (task) => task.name === event.target.innerHTML
    );
    this.setState({
      tasks: this.state.tasks.map((task, i) =>
        i === index ? { name: task.name, done: !task.done } : task
      ),
    });
  }

  handleSubmit = (event) => {
    if (this.state.newTask !== "") {
      var taskId = this.state.tasks.length + 1;
      this.setState({
        tasks: this.state.tasks.concat({
          id: taskId,
          name: this.state.newTask,
          done: false,
        }),
        newTask: "",
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => (
              <li
                key={index}
                onClick={this.handleClick.bind(this)}
                className={task.done ? "done" : ""}
              >
                {task.name}
              </li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className={this.state.newTask === "" ? "error" : ""}
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask}
              onChange={this.addNewTask.bind(this)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
