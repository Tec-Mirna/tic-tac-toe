 
 
 //lo que debe tener el tablero(O o X), Actualizar el tablero(al hacer clic) y saber el indice de cadacuadrado
export const Square = ({children, isSelected, updateBoard, index}) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`//Mostrar a quien le corresponde marcar
  
    const handleClick = () => {
     updateBoard(index)
    }
  
    /* DIV A EJECUTAR  */
      return(
        <div onClick={handleClick} className={className}>
            {children}
        </div>
  
     )
}
  
