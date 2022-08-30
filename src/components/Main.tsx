import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/home/Home.page';
import { SurveysPage } from '../pages/survey/Surveys.page';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/surveys' element={<SurveysPage />}></Route>
        </Routes>
    );
}

export default Main;