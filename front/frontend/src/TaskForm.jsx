import { useState } from "react";
import axios from "axios";


function TaskForm({refreshTasks}){
    const [title, setTitle] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();
        await axios.post("http://localhost:8080/tasks" , {title, completed: false});
        setTitle("");
        refreshTasks();
    };



    return(
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Nova Tarefa"/>
                <button type="submit">Adicionar</button> 
              
            </form>

    );


}

export default TaskForm;