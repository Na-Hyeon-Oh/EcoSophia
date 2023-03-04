import React, { useState } from "react";
import ReactDatePicker from "../../../components/datePicker/DatePicker"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import History from "../../../../model/History";
import NumberUtils from '../../../../assets/utils/NumberUtils';
import Tag from '../../../../model/Tag';
import ReactTagInput from '../../../components/tagInput/TagInput';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../assets/styles/muiTheme';
import styles from './addhistory.module.css';

const AddHistoryContainer = () => {
    return (
        <div className = {styles.addhistory_container}>
            <Title/>
            <AddHistoryForm/>
        </div>
    )
}

const Title = () => {
    return (
        <div className = {styles.addhistory_title_container}>
            내역 추가
        </div>
    )
}

const AddHistoryForm = () => {
    //const [{ addHistory }, { nextItemId }, { nextTagId } ] = useContext(I)
    const [date, setDate] = useState<Date>(new Date());
    const [content, setContent] = useState("");
    const [cost, setCost] = useState("0");
    const [tags, setTags] = useState<Array<Tag>>([]);
    const [isValidContent, setIsValidContent] = useState(false);
    const [isValidCost, setIsValidCost] = useState(false);

    const contentChangeHandler = (event: any) => {
        let isValidSize: boolean = event.target.value.length >= 0 ? true : false;
        setIsValidContent(isValidSize);
        if(isValidSize) setContent(event.target.value);
    }

    const costChangeHandler = (event: any) => {
        let isNotNumber: boolean = /^[^1-9][^0-9]$/g.test(NumberUtils(event.target.value).deleteComma())
            || isNaN(Number(NumberUtils(event.target.value).deleteComma())) ? true : false;
        setIsValidCost(isNotNumber);
        if(!isNotNumber) {
            setCost(BigInt(NumberUtils(event.target.value).deleteComma()).toString());
        }
    }

    const tagAddHandler = (tag: Tag) => {
        setTags([...tags, tag]);
    };

    const tagDeleteHandler = (i: number) => {
        setTags(tags.filter((tag: Tag, index: number) => index !== i));
    };

    const submitHandler = (event: any) => {
        event.preventDefault();                 // avoid page reload
        
        const enteredData: History = {
            id: 1,
            userId: 1,
            date: date,
            content: content,
            cost: Number(NumberUtils(cost).deleteComma()),
            tags: tags,
        };

        // 등록
        //addHistory(enteredData);
        console.log(enteredData);

        // initialize
        setDate(new Date());
        setContent("");
        setCost("0");
        setTags([]);
    }

    return (
        <div className = {styles.addhistory}>
            <div className = {styles.addhistory_form}>
                <div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>날짜</div>
                        <div>
                            <ReactDatePicker date={date} onChange={setDate}/>
                        </div>
                    </div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>태그</div>
                        <div>
                            <ReactTagInput tags={tags} onAddition={tagAddHandler} onDelete={tagDeleteHandler}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>금액</div>
                        <div className = {styles.addhistory_form_content}>
                            <TextField
                                id="standard" variant="standard" fullWidth
                                value={NumberUtils(cost).addComma()}
                                onChange={costChangeHandler}
                                style={{minWidth:250}}
                            ></TextField>
                            <div className={styles.addhistory_form_error}
                                 style={{display: cost == "0" ? "block" : "none"}}>
                                {
                                    isValidCost ? "잘못된 금액 형식입니다." : "금액은 필수 입력란입니다."
                                }
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>내용</div>
                        <div className = {styles.addhistory_form_content}>
                            <TextField
                                id="standard-multiline-flexible" variant="standard" multiline fullWidth
                                value={content}
                                onChange={contentChangeHandler}
                                style={{minWidth: 300}}
                            ></TextField>
                            <div className={styles.addhistory_form_error}
                                  style={{display: content.length == 0 ? "block" : "none"}}>
                                내용은 필수 입력란입니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div className = {styles.addhistory_form_button}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" onClick={submitHandler}>추가</Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default AddHistoryContainer