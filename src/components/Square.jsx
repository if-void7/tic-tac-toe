import './Square.css'

function square({value, onClick}) {
  let style = null;

  if (value == 'X')
      style = 'square x';
  else if (value == 'O')
      style = 'square o';
  else 
      style = 'square';
  
  return (
    <div>
      <button onClick = {onClick} className={style}>
          {value}
      </button>
    </div>
  )
}

export default square