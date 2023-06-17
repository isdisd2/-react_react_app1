import React, { useState, useContext } from "react"

import LangContext from "./lang-context"

function UseContextComponent2() {
  const langObj = useContext(LangContext);

  return (<div>

      <p>cez useContext import: select lang: (default is {langObj.lang})</p>

    </div>

  )
}

export default UseContextComponent2