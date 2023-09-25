import {Routes, Route } from 'react-router-dom';
import {HomePage} from './View/HomePage/HomePage.js';
import SignIn from './View/LoginPage/Login.js'
import {MeetingScheduler} from './View/MeetingScheduler/MeetingScheduler';
const Views = () => {
    return (
    <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/meetingScheduler"  element={<MeetingScheduler />}/>
        <Route index element={<SignIn/>}/>
        <Route path='*' element={<div> 404 LOL</div>} />
    </Routes>
    );
}

export default Views;