import styles from './Tasks.module.css'

import { Trash } from 'phosphor-react'

interface TasksProps {
    id: string
    title: string
    taskComplete: boolean
    onSelectedTask: (id: string) => void
    onDeletedTask: (tasks: string) => void
}

export function Tasks({ id, title, taskComplete, onSelectedTask, onDeletedTask}: TasksProps) {

  function handleSelectedTask() {
    onSelectedTask(id)
  }

  function handleRemoveTask() {
    onDeletedTask(title)
  }

  return (
    <div className={`${taskComplete ? styles.task_list : styles.task_done}`}>
      <label className={styles.checkbox}>
        <input onClick={handleSelectedTask} type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p>
        {title}
      </p>
      <button onClick={handleRemoveTask} className={styles.trash}><Trash size={16} /></button>
    </div>
  )
}