import { useState } from 'react';
import './Signup.css';

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    
    return (
        <form className='auth-form'>
            <h2>Sign Up</h2>
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
            <label>
                <span>Display Name:</span>
                <input
                type="text"
                required
                onChange={event => setDisplayName(event.target.value)}
                value={displayName}
                />
            </label>
            <label>
                <span>Upload a profile photo:</span>
                <input
                required
                type="file"
                // onChange={event => setThumbnail(event.target.value)}
                // value={thumbnail}
                />
            </label>
            <button className='btn'>Sign up</button>
        </form>
    )
};
