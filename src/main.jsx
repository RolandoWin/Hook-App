import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-UseContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

//import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
//import './08-useReducer/intro-reducer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
