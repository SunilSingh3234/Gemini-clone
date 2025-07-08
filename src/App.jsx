import React from 'react'
import Sidebar from './components/Sidebar'
import Maincontent from './components/Maincontent'

const App = () => {
  return <>
    <div className='flex'>
      <Sidebar/>
    <Maincontent/>
    </div>
  </>
}

export default App
