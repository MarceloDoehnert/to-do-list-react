import styles from "./NoTask.module.css"

// Icons
import {ClipboardText} from 'phosphor-react'

export function NoTask() {
  return (
    <section className={styles.list_without_task}>
      <ClipboardText size={80} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  )
}