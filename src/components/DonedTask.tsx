import styles from './DonedTask.module.css'

interface NumberOfTasksProps {
  onNumberOfTasks: number
}

export function DonedTask({onNumberOfTasks}: NumberOfTasksProps) {
  return (
    <div className={styles.doned_task}>
      <strong>Concluídas</strong>
      <span>2 de {onNumberOfTasks}</span>
    </div>
  )
}