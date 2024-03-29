import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../../../redux/store';
import { createMethod } from '../../../../../redux/actions/method';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../../assets/styles/muiTheme';
import { Method } from '../../../../../model/Method';
import { MethodType } from '../../../../../assets/enums/MethodType';
import ReactDropDownList from '../../../../components/dropDownList/DropDownList';

import styles from './addMethod.module.css';

const AddMethodForm = ({}) => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const userId = useSelector((state: RootState) => state.auth.userId);

    const [name, setName] = useState("");
    const [methodType, setMethodType] = useState<MethodType>(MethodType.Card);
    const [key, setKey] = useState(0);

    const methodTypeChangeHandler = (methodType: MethodType) => {
        setMethodType(methodType);
    };

    const nameChangeHandler = (event: any) => {
        setName(event.target.value);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();                 // avoid page reload

        const enteredData: Method = {
            id: 1,
            type: methodType,
            name: name,
        };

        // 등록
        if (userId) {
            await dispatch(createMethod(userId, enteredData));
        }

        initializeForm();
    }

    const initializeForm = () => {
        setMethodType(MethodType.Cash);
        setName("");
        setKey(prevKey => prevKey + 1);
    }

    return (
        <div className = {styles.addmethod_form}>
            <div className = {styles.addmethod_form_section}>
                <div className = {styles.addmethod_form_title}>분류</div>
                <div className = {styles.addmethod_form_content}>
                    <ReactDropDownList key={key} data={[MethodType.Cash, MethodType.Card]} value={methodType} onChange={methodTypeChangeHandler} />
                </div>
            </div>
            <div className = {styles.addmethod_form_section}>
                <div className = {styles.addmethod_form_title}>결제수단명</div>
                <div className = {styles.addmethod_form_content}>
                    <TextField
                        id="standard-multiline-flexible" variant="standard" multiline fullWidth
                        value={name}
                        onChange={nameChangeHandler}
                        style={{minWidth: 350}}
                    ></TextField>
                    <div className={styles.addmethod_form_error}
                         style={{display: name.length === 0 ? "block" : "none"}}>
                        결제수단명은 필수 입력란입니다.
                    </div>
                </div>
            </div>
            <div className = {styles.addmethod_form_button}>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary"
                            onClick={submitHandler} disabled={ name.length === 0 }>
                        등록
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default AddMethodForm;