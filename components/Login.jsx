import React, { useState } from 'react';
import { useTauri } from 'tauri-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { invoke } = useTauri();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await invoke('login', { username, password });
    if (response.success) {
      console.log('Login successful!');
    } else {
      console.error('Login failed!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
