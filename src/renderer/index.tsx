import * as React from "react"
import { render } from "react-dom"
import { compose, pure, withState } from "recompose"
import Header from "./components/Header"
import Grid from "./components/Grid"
import utils from "./utils"
import { Button } from "react-materialize"

import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"

import "./index.css"

const defaultState = {
  moves: [{ boxes: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true
}
const enhance = compose(
  withState("state", "setState", defaultState),
  pure
)
// @ts-ignore
const Game = enhance(({ state, setState }) => {
  const moves = state.moves
  const current = moves[state.stepNumber]
  const winner = utils.calculateWinner(current.boxes)

  return (
    <div className="game">
      <Header />
      <div className="game-board">
        <Grid
          boxes={current.boxes}
          onClick={utils.handleClick(state, setState)}
        />
      </div>
      <div className="game-info">
        <div>{(winner) ? `Winner: ${winner}` : `Next player: ${(state.xIsNext) ? "X" : "O"}`}</div>
        <Button id="restart" onClick={() => setState(defaultState)}>Restart</Button>
      </div>
    </div>
  )
})

render(
  <Game />,
  document.getElementById("app")
)
