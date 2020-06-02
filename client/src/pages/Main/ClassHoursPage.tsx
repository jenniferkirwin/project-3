import React from 'react';
import ClassHoursGrid from './TeacherAssignmentPage/Card/ClassHours';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';

const ClassHoursPage = () => {
    return(
        <div>
            <TeacherAppBar />
            <ClassHoursGrid />
        </div>
    );
}

export default ClassHoursPage;