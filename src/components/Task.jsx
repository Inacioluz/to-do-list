import styles from "./Task.module.css";
import plus from "../assets/plus.svg";
import layerNotDone from "../assets/layer01.svg";
import layerDone from "../assets/layer02.svg";
import deleted from "../assets/deleted.svg";
import Clipboard from "../assets/clipboard.svg";
import { useState} from "react";

export function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(0);


  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ];
      setTasks(updatedTasks);
      setNewTask("");
      setId(id + 1);
    }
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return (
        <div className={styles.body_tarefas}>
          <img src={Clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      );
    } else {
      return tasks.map((task) => (
        <ul key={task.id} className={styles.talks_list}>
          <img src={layerNotDone} alt=""/>
          <li key={task.id}>
            {task.completed ? `[X] ${task.text}` : task.text}
          </li>
          <img
            className={styles.deleted}
            src={deleted}
            alt=""
            onClick={() => handleDeleteTask(task.id)}
          />
        </ul>
      ));
    }
  };

  return (
    <main>
      <div className={styles.constainer}>
        <div className={styles.comment}>
          <input
            id="outlined-basic"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova terefa"
          />
          <button onClick={addTask}>
            Criar
            <img src={plus} alt="mais ao lado do button" />
          </button>
        </div>

        <div className={styles.table_tasks}>
          <div className={styles.create_completed}>
            <div className={styles.criados}>
              <strong>Criadas 0 </strong>
            </div>
            <div className={styles.concluidas}>
              <strong>Concluidas 0</strong>
            </div>
          </div>
          {renderTasks()}
        </div>
      </div>
    </main>
  );
}
