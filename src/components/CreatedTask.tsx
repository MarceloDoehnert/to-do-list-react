import styles from './CreatedTask.module.css'

interface NumberOfTasksProps {
  onNumberOfTasks: number
}

export function CreatedTask({onNumberOfTasks}: NumberOfTasksProps) {

  return (
    <div className={styles.created_task}>
      <strong>Tarefas criadas</strong>
      <span>{onNumberOfTasks}</span>
    </div>
  )
}