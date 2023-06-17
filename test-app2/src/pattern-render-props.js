import React, { useState } from "react"

function PatternRenderProps() {
  return (
    <div className="box">
      <TextInput>
        {(value) => (
          <div className="flex-row">
            <Comp1 val={value}/>
            <Comp2 val={value}/>
          </div>
        )}
      </TextInput>
    </div>
  )
}

function TextInput(props) {
  const [value, setValue] = useState("")

  return (<>
      PatternRenderProps / Zadaj hodnotu:
      <input type="text" value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
      {props.children(value)}
    </>

  )
}

const Comp1 = (props) =>
  <p className="flex-item">P1: {props.val}</p>

const Comp2 = ({ val }) =>
  <p className="flex-item">P2: {val}</p>

export default PatternRenderProps