import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header className="container"/>
            <Routes>
                <Route path="/" element={<><h1 className='container'>Home</h1></>} />
                <Route path="/about" element={<><h1 >About</h1></>} />
                <Route path="*" element={<><h1>404 Not Found</h1></>} />
            </Routes>
            <Footer className="container"/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;