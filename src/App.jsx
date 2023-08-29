import { useState } from 'react'
import './App.css';
import RecipePage from './RecipePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RecipePage />
      </div>
      
    </>
  )
}

export default App
