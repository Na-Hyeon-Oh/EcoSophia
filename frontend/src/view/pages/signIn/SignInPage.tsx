import React from 'react';
import CardLayout from '../../components/cardLayout/CardLayout';
import SignInUpForm from '../../components/signInUpForm/SignInUpForm';
import { SignInUpRequest } from '../../../model/SignInUpRequest';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import signInAction from '../../../redux/actions/signIn';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SignInPage = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const signInHandler = async (data: SignInUpRequest) => {
        try {
            await dispatch(signInAction(data));
        } catch (error) {
            console.log(error);
        }
    }

    const signUpHandler = () => {
        window.location.href = "/sign-up";
    }

    return (
        <CardLayout>
            <SignInUpForm type="Sign In" onSubmit={signInHandler}/>
            <div style = {{textAlign: "right"}}>
                <Button
                    onClick={signUpHandler}
                    style={{color:"white", fontSize:"13px", padding: "0px", margin:"0px 20px 2px 20px"}}
                >Sign Up</Button>
            </div>
        </CardLayout>
    )
}

export default SignInPage