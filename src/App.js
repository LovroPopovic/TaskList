import React, { useState } from "react";
import Tasklist from "./tasklist";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Tasklist task={tasks} />
      <input type="text" />
      <button>Add task</button>
      <button>Delete completed tasks</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
