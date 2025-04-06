import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Paper, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/api';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
        setError('');
        setIsLoading(true);
        try {
            const response = await loginUser(username, password);
            if (response && response.token) {
                navigate('/');  // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
            } else {
                setError('Authentication failed. No token received.');
            }
        } catch (err) {
            console.log('Error:', err);  // توضيح تفاصيل الخطأ
            setError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                p: 2,
            }}
        >
            <Paper
                sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                    Login
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <TextField
                    label="Username"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    helperText={!username && 'Username is required'}
                    error={!username && !!error}
                    InputProps={{
                        sx: { borderRadius: 2 }
                    }}
                />

                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    helperText={!password && 'Password is required'}
                    error={!password && !!error}
                    InputProps={{
                        sx: { borderRadius: 2 }
                    }}
                />

                <FormControlLabel
                    control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                    label={<Typography variant="body2">Remember me</Typography>}
                    sx={{ mt: 2, mb: 3 }}
                />

                <Button
                    onClick={handleLogin}
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        mb: 3,
                        py: 1.5,
                        borderRadius: 50,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </Button>

                <Box sx={{ textAlign: 'center' }}>
                    <Link href="#" variant="body2" sx={{ display: 'block', mb: 2 }}>
                        Forgot password?
                    </Link>
                    <Link href="/signup" variant="body2">
                        Don't have an account? Sign up
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginPage;
