import {Routes, Route } from 'react-router-dom';

import {HomePage} from './View/HomePage/HomePage.js';
import SignIn from './View/LoginPage/Login.js'
import {MeetingScheduler} from './View/MeetingScheduler/MeetingScheduler';

const Views = () => {
    const userToken = localStorage.getItem("token");
    const tokenValid = userToken && userToken.length > 0;

    /*
    const ProtectedRoutes = (
        <>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/meetingScheduler"  element={<MeetingScheduler/>} />
        </>
    );
    const UnProtectedRoutes = (
        <>
            <Route index element={<SignIn/>}/>
            <Route path='*' element={<div> 404 LOL</div>} />
        </>
    );
    */


    return (
    <Routes>
        {tokenValid ? (
            <>
                <Route index element={<SignIn/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/meetingScheduler"  element={<MeetingScheduler/>}/>
                <Route path='*' element={<div>404 LOL</div>}/>
            </>
        ) : (
            <>
                <Route index element={<SignIn/>}/>
                <Route path="/home" element={<div> Please log in first!</div>}/>
                <Route path="/meetingScheduler" element={<div> Please log in first!</div>}/>
                <Route path='*' element={<div>404 LOL</div>}/>
            </>
        )}
    </Routes>
    );
}

export default Views;