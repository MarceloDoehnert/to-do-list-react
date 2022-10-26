import styles from './Form.module.css'
import { PlusCircle } from 'phosphor-react'

// Hooks
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormProps {
  onAddNewTask: (content: string) => void
}

export function Form({onAddNewTask}: FormProps) {

  const [newTaskContent, setNewtaskContent] = useState('')

  function handleChangeContentTask(event: ChangeEvent<HTMLInputElement>) {
    setNewtaskContent(event.target.value)
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    onAddNewTask(newTaskContent)
    setNewtaskContent('')
  }

  const newTaskEmpty = newTaskContent.length === 0

  return (
    <div className={styles.input_area}>
      <form onSubmit={handleFormSubmit}>
        <input
        onChange={handleChangeContentTask}
        placeholder='Adicione uma nova tarefa'
        value={newTaskContent}
        type="text"
        />
        <button disabled={newTaskEmpty} type="submit">Criar <PlusCircle size={22} /></button>
      </form>
    </div>
  )
}

