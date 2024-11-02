import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth.service';
import Starfield from 'react-starfield';
import styles from './login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.starfieldWrapper}>
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor="black"
          />
        </div>
        <div className={styles.formWrapper}>
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightSection}>
        {/* Content for right section will go here */}
      </div>
    </div>
  );
}