import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Tik from './Tik'
import './styles.css'
import Counters from './counter'
import Todo from './todoApp/todo'
import HookMistake1 from './hook-mistake1'
import HookMistake2 from './hook-mistake2'
import HookMistake3 from './hook-mistake3'
import HookMistake4 from './hook-mistake4'
import Storage from './js/storage'
import UseRef1 from './useRef'
import UseRefModalMain from './useRefModaMain'
import UseImperativeHandle1App from './UseImperativeHandle1-app'
import HandleClick from './handleClick'
import PatternRenderProps from "./pattern-render-props"
import PatternProvider1 from "./pattern-provider-1";
import TaskApp from "./reducer-app";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Todo/>
    <br/>
    <Tik/>
    <div className="board-row"/>
    <br/>
    <Counters/>
    <div className="board-row"/>
    <br/>
    <App/>
    <HookMistake1/>
    <HookMistake2/>
    <HookMistake3/>
    <HookMistake4/>
    <UseRef1/>
    <UseRefModalMain/>
    <UseImperativeHandle1App/>
    {/* <Storage /> */}
    <HandleClick/>
    <br/>
    <PatternRenderProps/>
    <PatternProvider1/>
    <TaskApp/>
  </React.StrictMode>
)