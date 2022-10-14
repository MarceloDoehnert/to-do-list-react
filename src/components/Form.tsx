import styles from './Form.module.css'
import { PlusCircle } from 'phosphor-react'

// Hooks
import { useState, FormEvent, ChangeEvent } from 'react'

export function Form({onAddNewTask}) {

  const [newTaskContent, setNewtaskContent] = useState('')

  function handleChangeContentTask(event: ChangeEvent<HTMLInputElement>) {
    setNewtaskContent(event.target.value)
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    onAddNewTask(newTaskContent)
  }

  return (
    <div className={styles.input_area}>
      <form onSubmit={handleFormSubmit}>
        <input
        onChange={handleChangeContentTask}
        placeholder='Adicione uma nova tarefa' 
        type="text"
        />
        <button type="submit">Criar <PlusCircle size={38} /></button>
      </form>
    </div>
  )
}

