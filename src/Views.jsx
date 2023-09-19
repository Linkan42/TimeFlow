import {Routes, Route } from 'react-router-dom';
import { BackGround } from './View/BackGround.js';
import {HomePage} from './View/HomePage.js';

const Views = () => {
    return (
    <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route index element={<BackGround />}/>
        <Route path='*' element={<div> 404 LOL</div>} />
    </Routes>
    );
}

export default Views;