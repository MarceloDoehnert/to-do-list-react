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
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        taskComplete: true
      },
    
      {
        id: uuidv4(),
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        taskComplete: false
      },
    
      {
        id: uuidv4(),
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        taskComplete: false
      }
    ]
  )

  function addNewTask(content: string) {
    const newTask = {
      id: uuidv4(),
      title: content,
      taskComplete: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: object) {
    const taskDelete = tasks.filter(task => {
      return task !== taskToDelete 
    })

    setTasks(taskDelete)
  }
  
  return (
    <div>
      <Header />

      <main>
        <Form
        onAddNewTask={addNewTask}
        onDeleteTask={deleteTask}
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
            />
            )
          })}
        </article>
      </main>
    </div>
  )
}