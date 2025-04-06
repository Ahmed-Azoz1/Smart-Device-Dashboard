import React, { useState } from 'react';
import { 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Alert, 
    Paper, 
    FormControlLabel, 
    Checkbox, 
    Link   
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { signupUser } from '../lib/api'; // استيراد دالة التسجيل

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        // التحقق من صحة البيانات
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setIsLoading(true);
        try {
        // استدعاء دالة التسجيل (يجب أن تكون لديك دالة signupUser في الـ API)
        //   await signupUser({ email, password });
        navigate('/login'); // الانتقال إلى صفحة تسجيل الدخول بعد النجاح
        } catch (err) {
        setError('Registration failed. Please try again.');
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
            Sign Up
            </Typography>

            {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
                {error}
            </Alert>
            )}

            {/* حقل البريد الإلكتروني */}
            <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            helperText={!email && 'Email is required'}
            error={!email && !!error}
            InputProps={{ sx: { borderRadius: 2 } }}
            />

            {/* حقل كلمة المرور */}
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
            InputProps={{ sx: { borderRadius: 2 } }}
            />

            {/* حقل تأكيد كلمة المرور */}
            <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            helperText={password !== confirmPassword ? 'Passwords do not match' : ''}
            error={password !== confirmPassword && confirmPassword !== ''}
            InputProps={{ sx: { borderRadius: 2 } }}
            />

            {/* خيار الموافقة على الشروط */}
            <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="body2">I agree to the terms</Typography>}
            sx={{ mt: 2, mb: 3 }}
            />

            {/* زر التسجيل */}
            <Button
            onClick={handleSignup}
            variant="contained"
            fullWidth
            sx={{
                mt: 2,
                mb: 3,
                py: 1.5,
                borderRadius: 50,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
            }}
            disabled={isLoading}
            >
            {isLoading ? 'Signing up...' : 'Sign Up'}
            </Button>

            {/* رابط العودة إلى تسجيل الدخول */}
            <Box sx={{ textAlign: 'center' }}>
            <Link href="/login" variant="body2">
                Already have an account? Login
            </Link>
            </Box>
        </Paper>
        </Box>
    );
};

export default SignupPage;




