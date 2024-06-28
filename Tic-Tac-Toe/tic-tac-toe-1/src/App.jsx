import './App.css'
import Player from './components/Player'

function App() {
  return (
  <main>
    <div id="game-container">
      <ol id="players">
                                              {/* added player jsx here */}
       <Player name="Player 1" symbol="X"/>
       <Player name="Player 2" symbol="O"/>
      </ol>
      GAME BOARD
    </div>
  </main>
  )
}

export default App
