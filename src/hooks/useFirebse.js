import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Pages/Login/Firebase/init";

initAuth();
const useFirebase = () => {
    const [user, setuser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // sign in
    const signInusingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setuser(result.user);
            })
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)
            }
            else {
                setuser({})
            }
        })
        return () => unsubscribe;
    }, [])



    // sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }


    return {
        user,
        signInusingGoogle,
        logOut
    }

}

export default useFirebase;