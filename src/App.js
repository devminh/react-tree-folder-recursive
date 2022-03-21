import React from 'react'
import './App.css'
import 'h8k-components'
import { FolderTree } from './components/FolderTree'


function App({ treeDirectory }) {
  return (
    <div className='App'>
      <h8k-navbar header={"Tree directory -  React recursive"}></h8k-navbar>
      <FolderTree treeDirectory={treeDirectory} />
    </div>
  )
}

export default App
