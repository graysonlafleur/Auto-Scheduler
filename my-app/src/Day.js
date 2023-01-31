import { useState } from 'react'
import Time from './Time'

function Day (props) {
  const [isHover, setHover] = useState(false)

  const DayCtr = {
    color: 'black',
    height: isHover ? '600px' : '400px',
    width: isHover ? '30vw' : '12vw',
    backgroundColor: isHover ? 'white' : '',
    borderRadius: isHover ? '25px' : '',
    borderStyle: isHover ? 'solid' : '',
    borderRight: props.daydiv ? (isHover ? 'solid' : '1px solid black') : '',
  }

  const mouseEnter = (props) => {
    if(props.border !== undefined) {
      props.border(false)
    }
    
    setHover(true)
  }

  const mouseLeave = (props) => {
    if(props.border !== undefined) {
      props.border(true)
    }

    setHover(false)
  }

  return (
    <div style={DayCtr} onMouseEnter={() => mouseEnter(props)} onMouseLeave={() => mouseLeave(props)}>
      <div style={{height: '100%'}}>
        <header>
          {props.day}
          <hr></hr>
        </header>
        <div>
          <Time />
        </div>
      </div>
    </div>
  )
}

export default Day;