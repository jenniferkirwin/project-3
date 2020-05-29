import React from 'react';
import LoginForm from './LoginForm';


function FormContainer() {
  return (
    <div className="FormContainer" style={{ textAlign: "center" }}>
      <LoginForm onSubmit={({email, password}) => {
        console.log(email, password);
      } }/>
    </div>
  );
}

export default FormContainer;
