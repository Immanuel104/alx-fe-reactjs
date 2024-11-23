import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        // Redirect unauthenticated users
        return <Navigate to="/login" />;
    }
    // Render the child component if authenticated
    return children;
};

export default ProtectedRoute;
