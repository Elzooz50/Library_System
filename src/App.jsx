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
<<<<<<< HEAD
import Home from './Home/Home';
=======
import Browse from './Browse/Browse';
import BookDetails from './Book_Details/BookDetails';
>>>>>>> c53f70a5f3fbb881e9c05f624e7201a84f2f5237

function App() {
    return (
        <BrowserRouter>
            <Header className="containerr"/>
            <Routes>
                <Route path="/" element={<><h1 className='containerr'>Home</h1></>} />
                <Route path='/sign_up' element={<SignupPage/>}/>
                <Route path="/about" element={<><h1 >About</h1></>} />
                <Route path="/userprofile" element={<UserProfile/>} />
                <Route path="/browse" element={<Browse/>} />
                <Route path="/book_details" element={<BookDetails/>} />
                <Route path="/forget_password" element={<ForgetPassword/>} />
                <Route path="*" element={<PageNotFound/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
            <Footer className="containerr"/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;