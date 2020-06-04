import React, { useEffect, useState } from "react";
import app from "./../../config/fbConfig.js";

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
          console.log(`User Email: ${idTokenResult.claims.email}`);
          console.log(`User Role: ${idTokenResult.claims.role}`);
        });
      }
      setCurrentUser(user)
      setPending(false)
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
