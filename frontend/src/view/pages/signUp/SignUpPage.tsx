import React from 'react';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';
import CardLayout from "../../components/cardLayout/CardLayout";
import Button from '@mui/material/Button';

const SignUpPage = () => {
    const signUpHandler = () => {
        window.location.href = "/home";
    }

    const signInHandler = () => {
        window.location.href = "/sign-in";
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign Up" onSubmit={signUpHandler}/>
            <div style = {{textAlign: "right"}}>
                <Button
                    onClick={signInHandler}
                    style={{color:"white", fontSize:"13px", padding: "0px", margin:"0px 20px 2px 20px"}}
                >Sign In</Button>
            </div>
        </CardLayout>
    )
}

export default SignUpPage