import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import "./TaskPage.css";

const API_URL = "http://localhost:8080/tasks";

function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    // Carrega as tarefas do backend na inicialização
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Erro ao buscar tarefas");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        }
    };

    const addTask = async () => {
        if (newTask.trim() === "") return;

        const newTaskData = {
            title: newTask,
            description: "Descrição da tarefa",
            completed: false,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTaskData),
            });

            if (!response.ok) throw new Error("Erro ao adicionar tarefa");

            const createdTask = await response.json();
            setTasks([...tasks, createdTask]);
            setNewTask("");
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditText(tasks[index].title);
    };

    const confirmEdit = async (index) => {
        const updatedTask = {
            ...tasks[index],
            title: editText, // Apenas atualiza o título
            completed: false, // Mantém sempre false
        };

        try {
            const response = await fetch(`${API_URL}/${tasks[index].id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedTask),
            });

            if (!response.ok) throw new Error("Erro ao editar tarefa");

            setTasks(tasks.map((task, i) => (i === index ? updatedTask : task)));
            setEditingIndex(null);
        } catch (error) {
            console.error("Erro ao editar tarefa:", error);
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
                <button type="button" onClick={addTask}>Adicionar</button>
            </div>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={task.id} className="task">
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span>{task.title}</span>
                        )}
                        {editingIndex !== index ? (
                            <>
                                <button className="edit-btn" onClick={() => startEditing(index)}>
                                    <FaPencilAlt />
                                </button>
                                <button type="button" onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
                                    X
                                </button>
                            </>
                        ) : (
                            <button type="button" onClick={() => confirmEdit(index)}>Confirmar</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskPage;
