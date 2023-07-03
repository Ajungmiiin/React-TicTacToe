import { useState } from 'react';
import './App.css'
import Board from './components/Board'

function App() {

  const [history, setHistory] = useState([
    {squares: Array(9).fill(null)}
  ])
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)
  const current = history[stepNumber]

  const calculateWinner = (squares) => {
    const lines = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
    ]

    for (let i=0; i < lines.length; i++) {
     const [a,b,c] = lines[i]
     if(squares[a] && 
       squares[a] === squares[b] && 
       squares[a] === squares[c]) {
         return squares[a]
       }
    }
    return null;
 }

 const winner = calculateWinner(current.squares);
 let status;
 if(winner) {
   status = 'Winner' + winner
 } else {
   status = `Next player: ${xIsNext? "X" : "O"} `
 }

const handleClick = (i) => {
  const newHistory = history.slice(0, stepNumber + 1)
  const newCurrent = newHistory[newHistory.length - 1]
  const newSqaures = newCurrent.squares.slice()
  if (calculateWinner(newSqaures) || newSqaures[i]) {
    return 
  }

newSqaures[i] = xIsNext? "X" : "O"
  setHistory([...newHistory, {squares: newSqaures}]) 
  setXIsNext(prev => !prev)

  setStepNumber(newHistory.length)
}

const JumpTo = (step) => {
  setStepNumber(step)
  setXIsNext((step % 2) === 0)
}

const moves = history.map((step, move) => {
  const desc = move ? 
    `Go To Move ${move}` :
    "Go To Game start"

  return (
    <li key={move}>
      <button className='move-button' onClick={() => {JumpTo(move)}}>{desc}</button>
    </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board sqaures={current.squares} onClick={(i)=> handleClick(i)} />
      </div>
      <div className="game-info">
      <div className="status">{status}</div>
      <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
