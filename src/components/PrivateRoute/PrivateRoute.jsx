import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Oval
                height={60}
                width={60}
                color="#2ebeef"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#ff6799"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;