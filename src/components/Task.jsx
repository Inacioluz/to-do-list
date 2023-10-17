import { useState } from 'react';
import plus from '../assets/plus.svg';
import layerNotDone from '../assets/layer01.svg';
import layerDone from '../assets/layer02.svg';
import deleted from '../assets/deleted.svg';
import clipboard from '../assets/clipboard.svg';
import styles from './Task.module.css';

export function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDoneTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return (
        <div className={styles.body_tarefas}>
          <img src={clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      );
    } else {
      return tasks.map((task) => (
        <ul key={task.id} className={`${styles.talks_list} ${task.completed ? styles.completedTask : ''} `}>
          <img
            src={task.completed ? layerDone : layerNotDone}
            alt=""
            onClick={() => handleDoneTask(task.id)}
          />
          <li key={task.id}>
            {task.completed ? `${task.text}` : task.text}
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
      <div className={styles.container}>
        <div className={styles.comment}>
          <input
            id="outlined-basic"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={addTask}>
            Criar
            <img src={plus} alt="mais ao lado do button" />
          </button>
        </div>

        <div className={styles.table_tasks}>
          <div className={styles.create_completed}>
            <div className={styles.criados}>
              <p>Criadas <strong>{tasks.length}</strong></p>
            </div>
            <div className={styles.concluidas}>
              <p>Concluídas <strong>{tasks.filter((task) => task.completed).length} de {tasks.length}</strong> </p>
            </div>
          </div>
          {renderTasks()}
        </div>
      </div>
    </main>
  );
}
