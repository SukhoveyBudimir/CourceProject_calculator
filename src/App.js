import Calculator from "./components/Calculator/Calculator";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Calculator/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
