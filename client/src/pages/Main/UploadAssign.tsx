import React from 'react';
import TeacherPage from './TeacherAssignmentPage/LandingGrid/index';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';
import { Redirect } from "react-router";


const UploadAssign = () => {

  let userRoleId = sessionStorage.Role;
  //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
  //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb

  if (userRoleId !== "5ede9c42-1f1f-4425-8de4-affe508b5adb") {
    return <Redirect to="/" />;
  }
    return (
      <div>
          <TeacherAppBar />
          <TeacherPage />
      </div>  
    );
}

export default UploadAssign;