import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSelectors';
import { userLoginWithGoogle } from '../../redux/user/userActions'
import { Redirect } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const theme = createTheme();

export function LoginPage() {
    const { user } = useSelector(getUser);
    const dispatch = useDispatch();

    const handleSubmitGoogle = (event) => {
        event.preventDefault();
        dispatch(userLoginWithGoogle());
    };

    return user !== null ?
        (<Redirect to='/movies' />) :
        (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Авторизация
                        </Typography>
                        <Box component="form" onSubmit={handleSubmitGoogle} noValidate sx={{ mt: 1 }}>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 1, display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '15px' }}>Войти с помощью Google</span><FaGoogle />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
}