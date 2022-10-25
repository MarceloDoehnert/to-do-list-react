import styles from './DonedTask.module.css'

interface NumberOfTasksProps {
  onNumberOfTasks: number
  onCountTaskDone: number
}

export function DonedTask({onNumberOfTasks, onCountTaskDone}: NumberOfTasksProps) {


  return (
    <div className={styles.doned_task}>
      <strong>Concluídas</strong>
      <span>{onCountTaskDone} de {onNumberOfTasks}</span>
    </div>
  )
}