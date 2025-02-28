import React, { useState } from "react";
import "./TaskPage.css";

function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div className="container">
            <h1>TASK MANAGER</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Nova tarefa"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-task" onClick={addTask}>Adicionar</button>
             
               
            </div>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <span>{task}</span>
                        <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskPage;
