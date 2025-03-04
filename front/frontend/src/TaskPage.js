import React, { useState } from "react";
import "./TaskPage.css";

function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleTaskStatus = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };

    const editTask = (index, newText) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, text: newText } : task));
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
                        <input
                            type="text"
                            value={task.text}
                            onChange={(e) => editTask(index, e.target.value)}
                        />
                        <button 
                            className={task.completed ? "task-incompleted" : "task-completed"} 
                            onClick={() => toggleTaskStatus(index)}
                        >
                            {task.completed ? "Incompleto" : "Completo"}
                        </button>
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
