import React, { useState, useContext, createContext } from "react"
import UseContextComponent2 from "./pattern-provider-use-context2"
import LangContext from "./lang-context"

function TextInput() {
  return (<LangContext.Consumer>
      {({ lang }) => (
        <p>cez .Consumer: select lang: (default is {lang})</p>
      )}
    </LangContext.Consumer>

  )
}

function useLanguage() { //nazov fcie musi zacinat slovom useXY
  return useContext(LangContext);
}

function PatternProvider1() {
  const langObj = useLanguage();

  return (
    <div className="box">
      PatternProvider1:
      <LangContext.Provider value={langObj}>
        <TextInput/>
        <UseContextComponent1/>
      </LangContext.Provider>
      <LangContext.Provider value={{ ...langObj, lang: "En-Us" }}>
        <UseContextComponent2/>
      </LangContext.Provider>
    </div>
  )
}

function UseContextComponent1() {
  const langObj = useLanguage();

  return (<div>

      <p>cez useContext: select lang: (default is {langObj.lang})</p>

    </div>

  )
}

export default PatternProvider1