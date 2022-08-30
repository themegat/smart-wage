import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/home/Home.page';
import { ResponsesPage } from '../pages/response/ResponsesPage';
import { SurveysPage } from '../pages/survey/Surveys.page';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/surveys' element={<SurveysPage />}></Route>
            <Route path='/responses/:surveyName/:surveyId' element={<ResponsesPage />}></Route>
        </Routes>
    );
}

export default Main;