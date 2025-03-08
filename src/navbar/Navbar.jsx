

export const Navbar = () => {


    return (

        <>
            <div className="flex flex-col w-[25vw] p-20 h-full items-start justify-evenly border-2 border-black bg-[#FFA3A3]">

                <div>
                    <div>Tools</div>
                    <hr className="w-20"/>
                    
                    <div>Change Color</div>
                    <div>Erase Canvas</div>
                    <div>Download Pdf</div>
                    <div>Find A color Pallete</div>
                </div>


                <div>
                    <div>Workflow</div>
                    <hr className="w-20"/>

                    <select name="station" id="station">
                        <option value="lofi-station">Lofi Station</option>
                        <option value="Rock-station">Rock Station</option>
                        <option value="Classics-Station">Classics Station</option>
                    </select>

                </div>

                <div>
                    <div>Find Color Pallette</div>
                    <hr className="w-20"/>

                    <select name="station" id="station">
                        <option value="lofi-station">Lofi Station</option>
                        <option value="Rock-station">Rock Station</option>
                        <option value="Classics-Station">Classics Station</option>
                    </select>

                </div>



  

            </div>
        </>
    )
}