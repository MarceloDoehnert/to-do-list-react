import styles from './Tasks.module.css'

import { Trash } from 'phosphor-react'

interface TasksProps {
    id: string,
    title: string,
    taskComplete: boolean,
    onSelectedTask: (id: string) => void,
}

export function Tasks({ id, title, taskComplete, onSelectedTask}: TasksProps) {

  function handleSelectedTask() {
    onSelectedTask(id)
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
      <button className={styles.trash}><Trash size={16} /></button>
    </div>
  )
}