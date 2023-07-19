import { useState } from 'react'
import Square from '../Square/Square'
import './index.css'

export default function Board({xIsNext, squares, onPlay}){

    const squareList = [[0,1,2],[3,4,5],[6,7,8]];

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    }
    else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    
    function handleClick(i) {

        if(squares[i] || calculateWinner(squares))  return;

        const nextSquares = [...squares]
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
        onPlay(nextSquares);
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return (
        <>
        <h3 className="status">{status}</h3>
        {
            squareList.map((square)=>{
                return(
                    <div key={square[0]} className="board-row">
                        {
                            square.map((num) => {
                                return (
                                    <Square key={num} value = {squares[num]} onSquareClick={()=>{handleClick(num)}} ></Square>
                                )
                            })
                        }
                    </div>
                )
            })
        }
        </>
    )
}