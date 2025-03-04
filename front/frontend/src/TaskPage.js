import React, { useState } from "react";
import "./TaskPage.css";

function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleTaskStatus = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditText(tasks[index].text);
    };

    const confirmEdit = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, text: editText } : task));
        setEditingIndex(null);
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
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span>{task.text}</span>
                        )}
                        {editingIndex !== index && (
                            <button 
                                className={task.completed ? "task-completed" : "task-incomplete"} 
                                onClick={() => toggleTaskStatus(index)}
                            >
                                {task.completed ? "Incompleto" : "Completo"}
                            </button>
                        )}
                        {editingIndex === index ? (
                            <button onClick={() => confirmEdit(index)}>Confirmar</button>
                        ) : (
                            <button onClick={() => startEditing(index)}>Editar</button>
                        )}
                        {editingIndex !== index && (
                            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
                                X
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskPage;
