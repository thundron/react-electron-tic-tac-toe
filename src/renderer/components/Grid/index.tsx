import * as React from "react"
import Box from "../Box"

const Grid = ({ boxes, onClick }:GridType) => {
  const renderBox = (i) => {
    return (
      <Box value={boxes[i]} onClick={() => onClick(i)} />
    )
  }
  
  return (
    <div>
      <div className="board-row">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
      </div>
      <div className="board-row">
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
      </div>
      <div className="board-row">
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>
    </div>
  )
}

interface GridType {
  boxes:React.ReactChildren,
  onClick:Function
}

export default Grid
