import { useState } from "react";

const intialGameBoard=[
 [null,null,null],
 [null,null,null],
 [null,null,null]   
]
export default function GameBoard(){
    const[gameBoard,setGameBoard]=useState(intialGameBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]="X";
            return updatedBoard;
        });
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                <ol>
                    {row.map((palyerSymbol,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{palyerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
            ))}
        </ol>
    );
}