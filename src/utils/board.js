   import { WINNERS } from "../constantes"
   
   // Verificar las combinaciones para saber quien ganó (X o O)
   export const checkWinner = (boardToCheck) => {
    for (const combo of WINNERS){
      const [a, b, c] = combo
      if (
        //Si en a existe algo luego ver si a y b son igual, luego ver si a y c son igual(hay ganador)
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      )
      // mostrar el ganador
      {
         return boardToCheck[a] // x u o
      }
    }
    // si no hay ganador
    return null
   }

    //Empate
   export  const checkEndGame = (newBoard) => {
    //si no hay más espacios vacío en el tablero y no hay ganador
    //si todas las posiciones en el tablero son diferente de null(están llenos todos los recuadros)
    return newBoard.every((square) => square !== null)
   }