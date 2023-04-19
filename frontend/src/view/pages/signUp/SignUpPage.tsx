import React from 'react';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';
import CardLayout from "../../components/cardLayout/CardLayout";
import { SignInUpRequest } from '../../../model/SignInUpRequest';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import signUpAction from '../../../redux/actions/signUp';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SignUpPage = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const signUpHandler = async (data: SignInUpRequest) => {
        try {
            await dispatch(signUpAction(data));
        } catch (error) {
            console.log(error);
        }
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