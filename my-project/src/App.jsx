import { useState } from 'react'
import Header from './components/Header'
import InputComp from './components/InputComp'
import ToDoList from './components/ToDoList'


function App() {

  return (
    <>
      <Header />
      <br />
      <InputComp />
      <br/>
      <ToDoList/>
    </>
  )
}

export default App
