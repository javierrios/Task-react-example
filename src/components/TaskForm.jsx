import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
    const [title, setTitle] = useState("")    
    const [description, setDescripcion] = useState("")    

    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        createTask({title, description});
        setTitle("");
        setDescripcion("");
    }

    return (
   <div className='max-w-md mx-auto'>
         <form onSubmit={handleSubmit}  className='bg-slate-800  p-10 mb-4' >
            <h1 className='text-white font-bold pb-2 '>Agrega tus tareas</h1>
            <input placeholder="Ingrese la tarea"
                className='bg-slate-300 p-3  w-full mb-2'
                onChange={(e) => setTitle(e.target.value) }
                value={title} autoFocus
            />
            <textarea placeholder='Ingrese la descripcion'
                className='bg-slate-300 p-3  w-full mb-2'
                onChange={(e) => setDescripcion(e.target.value) }
                value={description}
             />

            <button  className='bg-indigo-500 px-3 py-1 p-2 hover:bg-indigo-700 rounded-sm text-white ' >Agregar Tarea</button>
        </form>
   </div>
    )        
}
export default TaskForm
