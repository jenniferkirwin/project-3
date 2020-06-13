import React, { useEffect, useState } from "react";
import app from "./../../config/fbConfig.js";
import API from './../../util/authApi';

//Propagate auth data through whole react component tree
export const AuthContext = React.createContext();

//Store authentication status
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult(true).then(idTokenResult => {
          sessionStorage.setItem(`UID`, user.uid);
          const UID = user.uid;
          function loadUser() {
            API.findUser(UID)
              .then(res => {
                sessionStorage.setItem('Role', res.data.RoleRoleId);
                sessionStorage.setItem('School', res.data.SchoolSchoolId);
              })
              .catch(err => console.log(err));
          };
          loadUser();
        });
      }
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return (
      <span>Loading...</span>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
