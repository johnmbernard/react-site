import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicForm from './components/PostForm'
import './css/PostForm.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <DynamicForm />
      </div>
    </>
  )
}

export default App
