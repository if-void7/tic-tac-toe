import { useState } from 'react'
import './Game.css'
import Square from './Square'

function calculateWinner(squares){
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  for (let [a, b, c ] of lines){
    if (squares[a] && squares[a] === squares[b] && squares [a] === squares[c]){
      return squares[a];
  }
 }
 return null;
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext,setxIsNext] = useState(true);
  let newRound = false;

  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "Vencedor "+winner;
    newRound = true;
  } else if(!squares.includes(null)){
    status = "Empate!"
    newRound = true;
  } else {
    status = "Próxima jogada: "+(xIsNext ? "X" : "O");
    newRound = false;
  }

  function handleSquareClick(i){
    if (squares[i] || winner) return; //Verifica se já existe uma interação no elemento na posição i ou se existe vencedor
    const nextSquares = [...squares]; //cria uma copia do elemento
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
    console.log(nextSquares);

  }

  function resetGame(){
    setSquares(Array(9).fill(null));
    setxIsNext(true);

  }

  
  return (
    <div className='game'>
        <h1 className='title'>Jogo da Velha</h1>
        <div className={winner?"status winner" : "status"}>{status}</div>
        <div className="board">
          <div className="row">{[0,1,2].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
          <div className="row">{[3,4,5].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
          <div className="row">{[6,7,8].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
        </div>
        {newRound &&<button className="reset" onClick={resetGame}>
          Novo Jogo
          </button>}
    </div>
  )
}

export default Game