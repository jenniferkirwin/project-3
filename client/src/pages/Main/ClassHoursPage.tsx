import React from 'react';
import ClassHoursGrid from './TeacherAssignmentPage/Card/ClassHours';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';

const ClassHoursPage = () => {
    return(
        <div style={{paddingTop: 100}}>
            <TeacherAppBar />
            <ClassHoursGrid />
        </div>
    );
}

export default ClassHoursPage;