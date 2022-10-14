import styles from './DonedTask.module.css'

export function DonedTask() {
  return (
    <div className={styles.doned_task}>
      <strong>Concluídas</strong>
      <span>2 de 5</span>
    </div>
  )
}