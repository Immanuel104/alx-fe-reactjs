import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate login and redirect to profile
        console.log('User logged in!');
        navigate('/profile/details');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Simulate Login</button>
        </div>
    );
};

export default Login;
