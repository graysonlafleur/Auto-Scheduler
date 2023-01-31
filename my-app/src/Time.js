

const TimeDiv = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const HourDiv = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  fontSize: 15,
  justifyContent: 'center',
  alignItems: 'center',
}

const Hour = {
  width: '10%',
  justifyContent: 'center',
  alignItems: 'center'
}

const Horizontal = {
  width: '85%',
  height: '1px',
  background: 'black',
  position: 'relative',
}

function Time() {
  return (
  <div style={TimeDiv}>
    <div style={HourDiv}>
      <div style={Hour}>8</div>
      <div style={Horizontal}></div>
    </div>
    <div style={HourDiv}>
      <div style={Hour}>9</div>
      <div style={Horizontal}></div>
    </div>
    <div style={HourDiv}>
      <div style={Hour}>10</div>
      <div style={Horizontal}></div>
    </div>
    <div style={HourDiv}>
      <div style={Hour}>11</div>
      <div style={Horizontal}></div>
    </div>
    <div style={HourDiv}>
      <div style={Hour}>12</div>
      <div style={Horizontal}></div>
    </div>
  </div>
  )
}

export default Time;