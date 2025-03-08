import { useRef, useState } from 'react'
import { SketchCanvas } from './sketchBoard/sketchBoard'
import { Navbar } from './navbar/Navbar'

export const App = () => {

  return (
    <div className='flex flex-row max-w-screen min-h-screen justify-between bg-[#E9D1D1]'>

      <div>
          <Navbar />
      </div>

      <div className="flex flex-col w-[75vw] justify-center items-center">
        <h1>React Sketch App</h1>
        <SketchCanvas />
      </div>

    </div>
  )
}

