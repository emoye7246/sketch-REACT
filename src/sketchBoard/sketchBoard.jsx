import React, { useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";

export const SketchCanvas = () => {

  const [color, setColor] = useState('red')
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  }

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    setLines(lines.slice(0, -1).concat(lastLine));
  }

  const handleMouseUp = () => {
    setIsDrawing(false);
  }

  const eraseCanvas = () => {

    setLines([])
  }

  return (
    <div>
      

      <Stage width={600} height={600} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="border-2 border-black h-[600px] w-[600px]">
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={`${color}`}
              strokeWidth={3}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>

      <button onClick={() => eraseCanvas()}>Erase Canvas</button>
    </div>
  );
};

