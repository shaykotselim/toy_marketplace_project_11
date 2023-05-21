import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='flex justify-center py-36'><Spinner className="h-12 w-12 "/></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="sign-in" replace></Navigate>
};

export default PrivetRoute;