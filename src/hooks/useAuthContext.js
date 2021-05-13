import { useContext } from 'react';
import { AuthContext } from 'store/context/authContext';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
