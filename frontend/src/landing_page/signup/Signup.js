import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../GeneralContext';

function Signup() {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        const url = isSignup ? 'http://localhost:3002/signup' : 'http://localhost:3002/login';
        const payload = isSignup
            ? { username, email, password }
            : { username, password };
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                setMessage(data.message || (isSignup ? 'Signup successful!' : 'Login successful!'));
                setError('');
                login();
                navigate('/dashboard');
            } else {
                setError(data.message || 'Something went wrong.');
                setMessage('');
            }
        } catch (err) {
            setError('Network error.');
            setMessage('');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                    />
                </div>
                {isSignup && (
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required={isSignup}
                            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                        />
                    </div>
                )}
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#387ed1', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    {isSignup ? 'Sign Up' : 'Log In'}
                </button>
            </form>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button onClick={() => { setIsSignup(!isSignup); setMessage(''); setError(''); setEmail(''); }} style={{ background: 'none', border: 'none', color: '#387ed1', cursor: 'pointer' }}>
                    {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                </button>
            </div>
            {message && <div style={{ marginTop: '1rem', color: 'green', textAlign: 'center' }}>{message}</div>}
            {error && <div style={{ marginTop: '1rem', color: 'red', textAlign: 'center' }}>{error}</div>}
        </div>
    );
}

export default Signup;