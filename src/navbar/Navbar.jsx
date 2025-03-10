import { useContext, useRef, useState } from "react"
import { ArtContext } from "../App"
import { MusicPlayer } from "../Musicplayer/musicPlayer"
import { myColorPalletes } from "../Fetches"


export const Navbar = () => {

    const {color, changeColor, pageColor, setPageColor, namePage, setNamePage} = useContext(ArtContext)

    const changePageColor = (color) => {

        setPageColor(color)

        
    }


    return (

        <>
            <div className="flex flex-col w-[30vw] p-12 h-full justify-evenly border-2 border-black bg-[#FFA3A3]">

            <div>
                <div className="flex text-3xl text-center items-center justify-center">Your Design Station</div>
                <hr />
            </div>

                <div className="flex flex-col">


                    <div className="mb-10">
                        <div>Tools</div>
                        <hr className="w-20"/>
                    </div>

                    <div className="flex flex-col gap-y-10">
                        <label htmlFor="color" className="flex flex-row items-center justify-between">
                            <div>Change Color</div>
                            <input type="color" name="color" id="color" className="rounded-[14px] h-10 w-10" onChange={(e) => changeColor(e.target.value)} />
                        </label>
                        <label htmlFor="color" className="flex flex-row items-center justify-between gap-x-10">
                            <div>Page Color</div>
                            <input type="color" name="color" id="color" value='#FFFFFF' className="rounded-[14px] h-10 w-10 border-0" onChange={(e) => changePageColor(e.target.value)} />
                        </label>

                        <label htmlFor="namePage" className="flex flex-row items-center justify-between gap-x-10">
                            <div>Canvas Name</div>
                            <input type="text" onChange={(e) => setNamePage(e.target.value)} className="border-b-[1px]" />
                        </label>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div>Workflow</div>
                    <hr className="w-20"/>

                    <MusicPlayer />
                    

                </div>

                <div>
                    <div>Find Color Pallette</div>
                    
                    <select name="colorPalltes" id="cp">
                        {myColorPalletes.map((colorPallette) => 
                            
                            <option value="">{colorPallette.Name}</option>
  

                        )}
                    </select>

                </div>

            </div>
        </>
    )
}