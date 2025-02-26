import { useEffect, useState } from "react";
import axios from "axios";

function TaskList(){

    const[tasks, setTasks] = useState([]);


    const fetchTasks = async () => {
        const response = await axios.get("http://localhost:8080/tasks");
        setTasks(response.data);
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return(
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );


}
export default TaskList;