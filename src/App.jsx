import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SignupPage from './Sign-Up/Sign_Up';
import ForgetPassword from './Forget_Password/ForgetPassword';
import UserProfile from './User_Profile/User_Profile'
import PageNotFound from './404/404'

function App() {
    return (
        <BrowserRouter>
            <Header className="containerr"/>
            <Routes>
                <Route path="/" element={<><h1 className='containerr'>Home</h1></>} />
                <Route path='/sign_up' element={<SignupPage/>}/>
                <Route path="/about" element={<><h1 >About</h1></>} />
                <Route path="/userprofile" element={<UserProfile/>} />
                <Route path="/forget_password" element={<ForgetPassword/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
            <Footer className="containerr"/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;