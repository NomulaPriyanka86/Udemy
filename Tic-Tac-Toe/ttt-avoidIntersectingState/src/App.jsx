import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Logs from './components/Logs';

function deriveActivePlayer(gameTurns){
  let currentPlayer="X";
  if(gameTurns.length > 0 && gameTurns[0].player==='X'){
    currentPlayer='O';
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer,setActivePlayer]=useState('X');
  const [gameTurns,setGameTurns]=useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((curActivePlayer)=>curActivePlayer==='X'? 'O' : 'X')
    setGameTurns(prevTurns=>{
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns=[{square: { row:rowIndex,col:colIndex} , player : activePlayer} ,
        ...prevTurns];
        return updatedTurns;
    });
  }

  return (
  <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
       <Player intialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
       <Player intialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
      </ol>
     <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
    </div>
    <Logs turns={gameTurns}/>
  </main>
  )
}

export default App
