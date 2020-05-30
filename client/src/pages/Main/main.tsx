import React from 'react';
import TeacherPage from './TeacherAssignmentPage/LandingGrid/index';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';

const mainTeacherPage = () => {
    return (
        <div>
            <TeacherPage />
            <TeacherAppBar />
        </div>
    );
}

export default mainTeacherPage;
