import styles from "./Comment.module.css";
import plus from "../assets/plus.svg";
import Clipboard from "../assets/clipboard.svg";

export function Comment() {
  return (
    <div>
      <div className={styles.comment}>
        <input placeholder="Adicione uma nova terefa" type="text" />
        <button>
          Criar
          <img src={plus} alt="mais ao lado do button" />
        </button>
      </div>
      <div className={styles.table_tasks}>
        <div  className={styles.create_completed}>
          <div className={styles.criados}>
            <strong>Criadas 0 </strong>
            
          </div>
          <div className={styles.concluidas}>
            <strong>Concluidas 0</strong>
            
          </div>
        </div>
        <div className={styles.body_tarefas}>
          <img src={Clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
