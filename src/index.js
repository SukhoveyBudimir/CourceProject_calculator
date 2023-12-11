import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import HistoryStore from "./store/HistoryStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value ={{
        history: new HistoryStore()
    }}>
        <App />
    </Context.Provider>,


);

