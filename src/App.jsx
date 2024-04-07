import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constantes'
import { checkWinner, checkEndGame} from './utils/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'



function App() {
  const [board, setBoard]= useState(Array(9).fill(null))

  /* Para saber el turno de cada uno */
  const [turn, setTurn] = useState(TURNS.X)

   const [winner, setWinner] = useState(null) // null no hay ganador, false empate

   //resetear
   const resetGame = () => {
     setBoard(Array(9).fill(null))
     setTurn(TURNS.X)
     setWinner(null)
   }

     /* Esta función se ejecuta al hacer clic en el div */
  const updateBoard = (index) => {
    // Si en el  board(indice) hay algo o hay un ganador ya no actualices(sobreescribir)
    if (board[index] || winner) return

   // ACTUALIZAR EL TABLERO Marcar x u o al haer clic
    const newBoard = [...board] 
    newBoard[index] = turn // x u o  Recibe el indice nuevo tablero
    setBoard(newBoard) // Actualizar

    /*CAMBIAR TURNOS Si el turno es igual al de las x significa que el nuevo turno es de O y luego de X*/
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      // revisar si hay ganador     le pasamos el nuevo tablero que hemos creado
      const newWinner = checkWinner(newBoard)
      if (newWinner) {
        //mostrar el confeti
        confetti()
        setWinner(newWinner)
      }else if (checkEndGame(newBoard)){//Si chequeamos el tablero y no hay un ganador
        setWinner(false) //Empate
      }

  }

  return (
    <>
    {/* Sección para el juego */}
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset del Juego</button>
          <section className='game'>
            { /* Renderiza cada elemento e identifica cada elemento con key*/
              board.map((square, index) => {
                 return (
                     <Square 
                     key={index}
                     index={index} //Es la función
                     updateBoard={updateBoard}
                     >
                     {/* mostrar en cada cuadro */}
                     {square}
                     </Square>
                 
                 )
              })
            }
          </section>
          {/* Sección para los turnos */}
          <section className='turn'>
            {/* Cuando el turn sea igual a Turns.x estará seleccionada la x */}
             <Square isSelected={turn === TURNS.X}>
              {TURNS.X}
            </Square>
             <Square isSelected={turn === TURNS.O}>
              {TURNS.O}
            </Square>
          </section>

         <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
      </main>
    </>
  )
}

export default App
