import { createContext, useRef, useState } from 'react'
import { SketchCanvas } from './sketchBoard/sketchBoard'
import { Navbar } from './navbar/Navbar'



export const ArtContext = createContext(null)

export const App = () => {

    const [color, setColor] = useState('black')
    const [pageColor, setPageColor] = useState('white')
    const [namePage, setNamePage] = useState('Skecth App')

    const changeColor = (color) => {

      setColor(color)
      console.log(color)
    }

 
  

  return (
    <div className='flex flex-row max-w-screen min-h-screen justify-between bg-[#E9D1D1]'>

      <ArtContext.Provider value={{color, changeColor, pageColor, setPageColor, namePage, setNamePage}} >
        <div>
            <Navbar  />
        </div>

        <div className="flex flex-col w-[70vw] mb-10 justify-center items-center">
          <h1>{namePage}</h1>

          <div className='h-[600px] w-[600px] rounded-2xl' style={{background: `${pageColor}`}}>
            <SketchCanvas color={color} />
          </div>

            
        </div>
      </ArtContext.Provider>
      </div>
  )
}

