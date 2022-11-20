import React, { useState } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthProvider, AuthCheck, useSigninCheck } from 'reactfire';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import { Input } from '../SharedComponents/Input';
import { Container, Button, Typography, Snackbar } from '@mui/material';
// import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useLocation, useMatch, redirect } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Navbar } from '../Navbar';
import styles from '../../styles.module.css';

export const SignIn = () => {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    // const { status, data: signInCheckResult} = useSigninCheck();
    const [open, setOpen] = useState(false);
    

    const handleSnackOpen = () => {
        setOpen(true)
    };

    const handleSnackClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway'){
            return;
        }

        setOpen(false);
        return redirect('/dashboard');
    }

    const sign_in = async () => {
        const response = await signInWithPopup(auth, provider);
        if (response.user){
            handleSnackOpen();
        }
    }

    const sign_out = async () => {
        await signOut(auth);
        console.log("Signed out")
    }
    
    return (
        <AuthProvider sdk={auth}>
        <div>
            <Navbar />
            <Container className={styles.mt} maxWidth='sm'>
                <Typography className={styles.typographyStyle} variant="h4">Sign In Below</Typography>
                <form className={styles.mt}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Input name="email" placeholder="Enter email here" />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Input name="password" placeholder="Enter password here" />
                    </div>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>

                <AuthCheck fallback={
                    <Button variant="contained" color="secondary" className={styles.googleButton} 
                        onClick={sign_in}>Sign In with Google</Button>
                }>
                    <Button variant="contained" color="error" className={styles.googleButton} 
                        onClick={sign_out}>Sign Out</Button>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity="success">
                        Successful Sign In - Redirect in 6 Seconds...
                    </Alert>
                </Snackbar>
            </Container>
        </div>
        </AuthProvider>
    )
}
