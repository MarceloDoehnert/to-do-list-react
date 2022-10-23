// CSS
import styles from './App.module.css'

// Icons
import { PlusCircle, ClipboardText, Trash } from 'phosphor-react'

// UUID
import { v4 as uuidv4 } from 'uuid'

// Componets
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { Form } from './components/Form'
import { useState, FormEvent, ChangeEvent } from 'react'
import { CreatedTask } from './components/CreatedTask'
import { DonedTask } from './components/DonedTask'

export function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: uuidv4(),
        title: "Estudar mais Javascript",
        taskComplete: true
      },
    
      {
        id: uuidv4(),
        title: "Estudar mais inglês",
        taskComplete: true
      },
    
      {
        id: uuidv4(),
        title: "Ler mais livros",
        taskComplete: true
      }
    ]
  )

  function addNewTask(content: string) {
    const newTask = {
      id: uuidv4(),
      title: content,
      taskComplete: true
    }
    setTasks([...tasks, newTask])
  }

  function selectedTask(id: string) {
    const completedTask = tasks.map(task => {
      if(task.id === id) {
        return {id: task.id, title: task.title, taskComplete: false}
      }else {
        return {id: task.id, title: task.title, taskComplete: task.taskComplete}
      }
    })
    setTasks(completedTask)
  }

  function deletedTask(taskToDelete: string) {
    const taskDeletedFromList = tasks.filter(task => {
      return task.title !== taskToDelete
    })

    setTasks(taskDeletedFromList)
  }

  
  return (
    <div>
      <Header />

      <main>
        <Form
        onAddNewTask={addNewTask}
        />

        <section className={styles.tasks_done_created}>
          <CreatedTask />
          <DonedTask />
        </section>

        <article>
          {tasks.map(task => {
            return (
            <Tasks
            id={task.id}
            key={task.id}
            title={task.title}
            taskComplete={task.taskComplete}
            onSelectedTask={selectedTask}
            onDeletedTask={deletedTask}
            />
            )
          })}
        </article>
      </main>
    </div>
  )
}