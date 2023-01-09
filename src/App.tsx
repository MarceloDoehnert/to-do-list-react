// CSS
import styles from './App.module.css'

// UUID
import { v4 as uuidv4 } from 'uuid'

// Componets
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { Form } from './components/Form'
import { useState} from 'react'
import { CreatedTask } from './components/CreatedTask'
import { DonedTask } from './components/DonedTask'
import { NoTask } from './components/NoTask'

export function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: uuidv4(),
        title: "Estudar Javascript.",
        taskComplete: true
      },
    
      {
        id: uuidv4(),
        title: "Estudar inglês.",
        taskComplete: true
      },
    
      {
        id: uuidv4(),
        title: "Estudar mais React JS.",
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
        return {id: task.id, title: task.title, taskComplete: !task.taskComplete}
      }else {
        return task
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

  const numberOfTasks = tasks.length

  const countTaskDone = tasks.reduce((acumulador, tasks) =>{
    if(tasks.taskComplete === false) {
      acumulador ++
    }
    
    return acumulador
  }, 0)

  return (
    <div>
      <Header />

      <main>
        <Form
        onAddNewTask={addNewTask}
        />

        <section className={styles.tasks_done_created}>
          <CreatedTask 
          onNumberOfTasks={numberOfTasks}
          />
          <DonedTask
          onCountTaskDone={countTaskDone}
          onNumberOfTasks={numberOfTasks}
          />
        </section>

        <article>
          {tasks.length === 0 ? <NoTask /> : tasks.map(task => {
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
          {}
        </article>
      </main>
    </div>
  )
}