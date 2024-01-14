import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import './Login.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isPending, error} = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <label>
                <span>Email:</span>
                <input
                type="email"
                required
                onChange={event => setEmail(event.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                type="password"
                required
                onChange={event => setPassword(event.target.value)}
                value={password}
                />
            </label>
            {!isPending && <button className='btn'>Sign in</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <div className='error'>{error}</div>}
        </form>
    )
};
