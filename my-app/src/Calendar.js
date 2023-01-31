import Day from './Day'
import { useState } from 'react'

function Calandar () {
  const [leftBorder, setLeftBorder] = useState(true)
  const [rightBorder, setRightBorder] = useState(true)

  const CalCtr = {
    height: '400px',
    width: '84vw',
    borderStyle: 'solid',
    borderRadius: '25px',
    display: 'flex',
    backgroundColor: 'blue',
    borderLeft: leftBorder ? 'solid' : '',
    borderRight: rightBorder ? 'solid' : '',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  return (
    <div style={CalCtr}>
      <Day border={setLeftBorder} daydiv={true} day={'Monday'} />
      <Day daydiv={true} day={'Tuesday'} />
      <Day daydiv={true} day={'Wednesday'} />
      <Day daydiv={true} day={'Thursday'} />
      <Day daydiv={true} day={'Friday'} />
      <Day daydiv={true} day={'Saturday'} />
      <Day border={setRightBorder} daydiv={false} day={'Sunday'} />
    </div>
  );
}

export default Calandar;