import { useState } from 'react';

import { SignInUpRequest } from '../../../model/SignInUpRequest';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../assets/styles/muiTheme';
import styles from './signInUpForm.module.css';

const SignInUpForm = ({type, onSubmit} : SignInUpFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (event: any) : void => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event: any) : void => {
        setPassword(event.target.value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();                 // avoid page reload

        const enteredData: SignInUpRequest = {
            email: email,
            pw: password
        };

        // 로그인/회원가입
        onSubmit(enteredData);
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.form_section}>
                <div className = {styles.form_title}>이메일</div>
                <div className = {styles.form_content}>
                    <TextField
                        id="standard-flexible" variant="standard" fullWidth
                        value={email}
                        onChange={emailChangeHandler}
                        style={{minWidth: 250}}
                    ></TextField>
                    <div className={styles.form_error}
                         style={{display: email.length === 0 ? "block" : "none"}}>
                        이메일을 입력하세요.
                    </div>
                </div>
            </div>
            <div className = {styles.form_section}>
                <div className = {styles.form_title}>비밀번호</div>
                <div className = {styles.form_content}>
                    <TextField
                        id="standard-flexible" variant="standard" fullWidth
                        value={password}
                        onChange={passwordChangeHandler}
                        style={{minWidth: 250}}
                    ></TextField>
                    <div className={styles.form_error}
                         style={{display: password.length === 0 ? "block" : "none"}}>
                        비밀번호를 입력하세요.
                    </div>
                </div>
            </div>
            <div className = {styles.form_button}>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained" color="primary"
                        onClick={submitHandler} disabled={ email.length === 0 || password.length === 0 }
                        style={{fontSize:"15px", fontWeight:"500", padding: "5px 30px"}}
                    >
                        {type}
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

interface SignInUpFormProps {
    type: string;
    onSubmit: (data: SignInUpRequest) => void;
}

export default SignInUpForm;