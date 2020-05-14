import React from "react";

const Form = (props) => {
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {props.thetask.map((task, index) => (
            <li
              onClick={() => props.handleInline(index)}
              className={task.done ? "done" : ""}
              key={index}
            >
              {task.name}
            </li>
          ))}
        </ul>
        <form onSubmit={props.submit} className="form-inline">
          <input
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={props.value}
            className={props.value === "" ? "error" : ""}
            onChange={props.updateTask}
            className={props.value !== "" ? "error" : ""}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
