import {tasks} from './data/task'
import Tasklist from './components/TaskList'
import TaskForm from './components/TaskForm'

function App(){

  return (
    <main className='bg-blue-600 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  )
}

export default App
