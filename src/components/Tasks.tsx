import styles from './Tasks.module.css'

import { Trash } from 'phosphor-react'

interface TasksProps {
    id: string,
    title: string,
    taskComplete: boolean,
    onDeleteTask: (taskToDelete: object) => void
}

export function Tasks({title, onDeleteTask, taskToDelete}: TasksProps) {

  function handleDeleteTasks() {
    onDeleteTask(taskToDelete)
  }

  return (
    <div className={styles.task_list}>
      <label className={styles.checkbox}>
        <input type="checkbox" />
      </label>
      <p>
        {title}
      </p>
      <button className={styles.trash} onClick={handleDeleteTasks}><Trash size={16} /></button>
    </div>
  )
}