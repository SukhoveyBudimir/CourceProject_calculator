import Calculator from "./components/Calculator/Calculator";

import History from "./components/Calculator/History";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Calculator/>}/>
                <Route path='/history' element={<History/>}/>
            </Routes>
        </BrowserRouter>
    );
})

export default App;