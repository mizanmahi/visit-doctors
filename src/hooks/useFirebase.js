import { useEffect, useState } from 'react';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
   updateProfile,
} from 'firebase/auth';
import initializeAuthentication from '../firebase/firebase.init';

//? initializing firebase authentication
initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [userLoading, setUserLoading] = useState(true);
   const [authError, setAuthError] = useState(false);

   const auth = getAuth();

   const googleProvider = new GoogleAuthProvider();

   //@ REGISTER WITH EMAIL AND PASS
   const registerWithEmailAndPassword = async (
      userName,
      email,
      password,
      history
   ) => {
      try {
         setUserLoading(true);
         setAuthError(null);

         await createUserWithEmailAndPassword(auth, email, password);
         // this is one time as a placeholder
         setUser({ email, displayName: userName });
         await updateProfile(auth.currentUser, {
            displayName: userName,
         });

         //? redirect to home page
         history.push('/');

      } catch (error) {
         setAuthError(error.message);
      } finally {
         setUserLoading(false);
      }
   };

   //@ SIGN IN  WITH EMAIL AND PASS
   const loginWithEmailAndPassword = async (
      email,
      password,
      location,
      history
   ) => {
      try {
         setUserLoading(true);
         const result = await signInWithEmailAndPassword(auth, email, password);
         console.log(result.user);
         location?.state?.from
            ? history.push(location.state.from.pathname)
            : history.push('/');
         setAuthError(null);
      } catch (error) {
         setAuthError(error.message);
      } finally {
         setUserLoading(false);
      }
   };

   const loginWithGoogle = async (location, history) => {
      try {
         setUserLoading(true);
         await signInWithPopup(auth, googleProvider);
         setAuthError(false);
         location?.state?.from
            ? history.push(location.state.from.pathname)
            : history.push('/');
      } catch (error) {
         setAuthError(error.message);
      } finally {
         setUserLoading(false);
      }
   };

   //@ LOGOUT USER
   const logoutUser = () => {
      signOut(auth).then(() => {
         console.log('User Logged Out');
      });
   };

   //@ OBSERVING AUTH STATE CHANGES
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(
         auth,
         (user) => {
            if (user) {
               setUser(user);
            } else {
               setUser(null);
            }
            setUserLoading(false);
         },
         (err) => {
            console.log(
               'Error from auth state changed error callback',
               err.message
            );
            setAuthError(err.message);
         }
      );

      return () => unSubscribe;
   }, [auth]);

   return {
      user,
      authError,
      userLoading,
      registerWithEmailAndPassword,
      loginWithEmailAndPassword,
      logoutUser,
      loginWithGoogle,
   };
};

export default useFirebase;
