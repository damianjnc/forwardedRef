import React, { useEffect, useRef } from 'react'
import Input from './components/Input'
import './App.css'

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const submitRef = useRef(null)
 
  useEffect(() => {
    firstNameRef.current.focus()
  }, [])

  const lastKeyDown = e => {
    if (e.key === 'Enter') {
      lastNameRef.current.focus()
    }
  }

  const submitKeyDown = e => {
    if (e.key === 'Enter') {
      alert('form submitted')
    }
  }

  return (
    <div className="App">
      <Input
        type="text"
        ref={firstNameRef}
        onKeyDown={lastKeyDown}
        placeholder="Enter first name"
      />
      <Input
        onKeyDown={submitKeyDown}
        type="text"
        ref={lastNameRef}
        placeholder="Enter last name"
      />
      <button onKeyDown={submitKeyDown} type="submit" ref={submitRef}>
        Submit
      </button>
    </div>
  )
}

export default App
