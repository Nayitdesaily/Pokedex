import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

const ProtectedRoutes = () => {

    const username = useSelector ( state => state.user )

    if ( username ){
        return <Outlet />
    }else {
        return <Navigate to='/' />
    }
};

export default ProtectedRoutes;