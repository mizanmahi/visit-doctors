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
   getIdToken
} from 'firebase/auth';
import initializeAuthentication from '../firebase/firebase.init';
import { axiAuth, axiosInstance } from '../utils/axiosInstance';

//? initializing firebase authentication
initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [userLoading, setUserLoading] = useState(true);
   const [authError, setAuthError] = useState(false);
   const [admin, setAdmin] = useState(false);

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

         //@ update user profile
         await updateProfile(auth.currentUser, {
            displayName: userName,
         });

         saveUserInfo(userName, email, 'POST');

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

   //@ Login with google
   const loginWithGoogle = async (location, history) => {
      try {
         setUserLoading(true);

         const { user } = await signInWithPopup(auth, googleProvider);
         setAuthError(false);

         saveUserInfo(user.displayName, user.email, 'PUT');

         //@ redirect where user was going
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
               getIdToken(user).then((token) => {
                  localStorage.setItem('idToken', token);
               });
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

   useEffect(() => {
      if (user) {
         setUserLoading(true)
         axiAuth.get(`/users/${user?.email}`).then(({ data }) => {
            setAdmin(data?.role ? data.role === 'admin' : false);
            setUserLoading(false)
         });
      }
   }, [user]);

   const saveUserInfo = async (displayName, email, method) => {
      const user = { displayName, email };
      const { data } = await axiosInstance({
         method,
         url: '/users',
         data: user,
      });
      console.log(data);
   };

   return {
      user,
      admin,
      authError,
      userLoading,
      registerWithEmailAndPassword,
      loginWithEmailAndPassword,
      logoutUser,
      loginWithGoogle,
   };
};

export default useFirebase;
