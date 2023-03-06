import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardLayout from '../../components/cardLayout/CardLayout';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';

const SignInPage = () => {
    const navigate = useNavigate();

    const signInHandler = () => {
        navigate('../home');
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign In" onSubmit={signInHandler}/>
        </CardLayout>
    )
}

export default SignInPage