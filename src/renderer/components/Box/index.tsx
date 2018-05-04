import React from "react"
import { Button } from "react-materialize"

const Box = (props) => (
  <Button className="box" onClick={props.onClick}>
    {props.value}
  </Button>
)

export default Box