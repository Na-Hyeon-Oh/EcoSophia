import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';
import CardLayout from "../../components/cardLayout/CardLayout";

const SignUpPage = () => {
    const navigate = useNavigate();

    const signUpHandler = () => {
        navigate('../home');
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign Up" onSubmit={signUpHandler}/>
        </CardLayout>
    )
}

export default SignUpPage