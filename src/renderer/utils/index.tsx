const handleClick = (state, setState) => (i) => {
  const moves = state.moves.slice(0, state.stepNumber + 1)
  const current = moves[moves.length - 1]
  const boxes = current.boxes.slice()
  if (calculateWinner(boxes) || boxes[i]) {
    return
  }
  boxes[i] = state.xIsNext ? "X" : "O"
  setState({
    moves: moves.concat([{ boxes: boxes }]),
    stepNumber: moves.length,
    xIsNext: !state.xIsNext
  })
}

const calculateWinner = (boxes) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const calculate = ([[a, b, c], ...tail]) => {
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) return boxes[a]
    if (tail.length) return calculate(tail)
    return null
  }
  return calculate(lines)
}

export default {
  handleClick,
  calculateWinner
}
