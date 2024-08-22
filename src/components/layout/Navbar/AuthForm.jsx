import { useState } from 'react';
import { LoginForm } from './form/LoginForm';
import { RegisterForm } from './form/RegisterForm';

export const AuthForm = ({ onClose }) => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => setIsRegister(!isRegister);

    return (
        <div>
            {isRegister ? (
                <RegisterForm toggleForm={toggleForm} />
            ) : (
                <LoginForm toggleForm={toggleForm} onClose={onClose} />
            )}
        </div>
    );
};
