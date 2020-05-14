import React, { useState } from "react";
import Form from "./components/Form";
/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

function App() {
  const tasks = [
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: true },
    { id: 3, name: "Leer un rato", done: false },
  ];

  //state
  const [thetask, setThetask] = useState(tasks);
  const [value, setValue] = useState("");

  //onchange
  const updateTask = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  //Unir array
  const handleClick = (value) => {
    const newTodos = [...thetask, { id: Date.now(), name: value, done: false }];
    setThetask(newTodos);
  };

  //Evento del formulario
  const submit = (event) => {
    event.preventDefault();
    if (!value) return;
    handleClick(value);
    event.target.reset();
  };

  //Tachado de tareas
  const handleInline = (index) => {
    const tachado = [...thetask];
    tachado[index].done = !tachado[index].done;
    setThetask(tachado);
  };

  return (
    <div>
      <Form
        thetask={thetask}
        updateTask={updateTask}
        submit={submit}
        handleClick={handleClick}
        handleInline={handleInline}
      />
    </div>
  );
}

export default App;
