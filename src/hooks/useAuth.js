import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider/AuthContextProvider';

export const useAuth = () => useContext(AuthContext);
