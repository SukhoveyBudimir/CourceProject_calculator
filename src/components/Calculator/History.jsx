import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './History.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const History = observer((props) => {
    const [historyArr, setHistoryArr] = useState([]);
    const {history} = useContext(Context)

    const clearHistory = () => {
        history.clearHistory();
    }

    return (
        <div>
            <h2 className="HistoryWrapper">История операций</h2>
            <ul className="HistoryList">
                {history.history.map((expression, index) => (
                    <li key={index} className="HistoryItem">{expression}</li>
                ))}
            </ul>
            <button onClick={clearHistory}>Очистить историю</button>
            <Link to="/" className="BackLink">Вернуться к калькулятору</Link>
        </div>
    );
});

export default History;
