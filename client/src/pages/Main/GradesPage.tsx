import React from 'react';
import GradesGrid from './TeacherAssignmentPage/LandingGrid/GradesGrid';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';

const GradesPage = () => {
    return(
        <div>
            <TeacherAppBar />
            <GradesGrid />
        </div>
    );
}

export default GradesPage;