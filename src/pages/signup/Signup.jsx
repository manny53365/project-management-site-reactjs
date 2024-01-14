import { useState } from 'react';
import './Signup.css';

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);

    const handleFileChange = event => {
        setThumbnail(null);
        let selectedImg = event.target.files[0];
        console.log(selectedImg);

        if (!selectedImg){
            setThumbnailError('Please select a file');
            return;
        };
        if (!selectedImg.type.includes('image')){
            setThumbnailError('Selected file must be an image');
            return;
        };
        if (selectedImg.size > 100000){
            setThumbnailError('Image file size must be less than 100kb');
            return;
        };

        setThumbnailError(null);
        setThumbnail(selectedImg);
        console.log('Thumbnail updated')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${email} \n ${password} \n ${displayName} \n ${JSON.stringify(thumbnail)}`);
    }
    
    return (
        <form className='auth-form' onSubmit={handleSubmit}>
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
                onChange={handleFileChange}
                // value={thumbnail}
                />
                {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>
            <button className='btn'>Sign up</button>
        </form>
    )
};
