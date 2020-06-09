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
          let userEmail = idTokenResult.claims.email;
          sessionStorage.setItem(`UID`, user.uid);
        });
      }
      setCurrentUser(user)
      setPending(false)

      const UID = user.uid;
      function loadUser() {
        API.findUser(UID)
          .then(res => 
            console.log(res.data)
          )
          .catch(err => console.log(err));
      };
      loadUser();
    });
  }, []);

  if(pending){
    return <>Loading...</>
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
