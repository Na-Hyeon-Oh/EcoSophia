import React from 'react';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';
import CardLayout from "../../components/cardLayout/CardLayout";

const SignUpPage = () => {
    const signUpHandler = () => {
        window.location.href = "/home";
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign Up" onSubmit={signUpHandler}/>
        </CardLayout>
    )
}

export default SignUpPage