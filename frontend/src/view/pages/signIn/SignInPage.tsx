import React from 'react';
import CardLayout from '../../components/cardLayout/CardLayout';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';

const SignInPage = () => {
    const signInHandler = () => {
        window.location.href = "/home";
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign In" onSubmit={signInHandler}/>
        </CardLayout>
    )
}

export default SignInPage