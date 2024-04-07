import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {

    /* Si el winner es null me devuelves null */
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó:'


    return(
        /*  Si winner es diferente de null  */
           <section className='winner'>
                 <div className='text'>
                  <h2>{winnerText} </h2>

                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>

                  <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                  </footer>
                 </div>
            </section>
    )
}