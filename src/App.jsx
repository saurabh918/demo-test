import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React, { Suspense } from 'react'
import ChildRef from './components/refs/ChildRef'
import ParentRef from './components/refs/ParentRef'
import Parent from './components/imperativeHandle/Parent'

const Home = React.lazy(() => import("./components/Home"))
const About = React.lazy(() => import("./components/About"))
const Contact = React.lazy(() => import("./components/Contact"))

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <ChildRef /> */}
      {/* <ParentRef /> */}
      <Parent />
      <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
