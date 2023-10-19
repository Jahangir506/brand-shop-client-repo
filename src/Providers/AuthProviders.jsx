import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const githubProvider = new GithubAuthProvider()
    const signInPopUp = () => {
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }

    const logOut = ()=> {
      setLoading(true)
      return signOut(auth)
    }
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("User in the auth state changed", currentUser);
        setUser(currentUser);
        setLoading(false)
      });
  
      return () => {
        unSubscribe();
      };
    }, []);
  
    const userInfo = {
      user,
      loading,
      createUser,
      signIn,
      signInPopUp,
      logOut
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;