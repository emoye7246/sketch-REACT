import React, { createContext, useContext, useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import { myIcons } from "../Fetches";



export const SketchCanvas = ({color}) => {

  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y], color}]);
  }

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    setLines((prevLines) => {
      let lastLine = prevLines[prevLines.length - 1]
      lastLine = { ...lastLine, points: [...lastLine.points, point.x, point.y] }

      return [...prevLines.slice(0, -1), lastLine]
    })
  }

  const handleMouseUp = () => {
    setIsDrawing(false);
  } 

  const eraseCanvas = () => {


      setLines([])
  }



  return (
    <div>
      
      <Stage width={600} height={600} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="h-[600px] w-[600px]">
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={3}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>

          <div className="flex flex-row w-full gap-x-10 mt-8 cursor-pointer" onClick={() => eraseCanvas()}>
              <img src={myIcons.eraser} alt="eraser-Icon" className="h-[24px] w-[24px]" />
              <button className="cursor-pointer" >Erase Canvas</button>
          </div>

    </div>
  );
};

