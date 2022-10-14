import styles from './CreatedTask.module.css'

export function CreatedTask() {
  return (
    <div className={styles.created_task}>
      <strong>Tarefas criadas</strong>
      <span>5</span>
    </div>
  )
}