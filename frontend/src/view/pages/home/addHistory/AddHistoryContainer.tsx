import React, { useState } from "react";
import ReactDatePicker from "../../../components/datePicker/DatePicker";
import ReactMultiSelect from '../../../components/multiSelect/MultiSelect';
import ReactDropDownList from '../../../components/dropDownList/DropDownList';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import History from "../../../../model/History";
import NumberUtils from '../../../../assets/utils/NumberUtils';
import Tag from '../../../../model/Tag';
import { tagList } from '../../../../assets/tagList/tagList';
import { Method } from '../../../../model/Method';
import { MethodType } from '../../../../assets/enums/MethodType';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../assets/styles/muiTheme';
import styles from './addHistory.module.css';

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
            History
        </div>
    )
}

const AddHistoryForm = () => {
    //const [ { userId }, { addHistory }, { nextHistoryId }, { methodList } ] = useContext(I)
    const methodList : Array<Method> = [
        {
            id: 0,
            userId: 1,
            type: MethodType.Cash,
            name: "현금"
        },
        {
            id: 1,
            userId: 1,
            type: MethodType.Card,
            name: "우리은행/우리SumCheck카드"
        },
    ];

    const [date, setDate] = useState<Date | null | undefined>(new Date());
    const [method, setMethod] = useState<Method>({
        id: 0,
        userId: 1,
        type: MethodType.Cash,
        name: "현금"
    });
    const [cost, setCost] = useState("0");
    const [costType, setCostType] = useState(true);
    const [content, setContent] = useState("");
    const [tags, setTags] = useState<Array<Tag>>([]);
    const [isValidContent, setIsValidContent] = useState(false);
    const [isValidCost, setIsValidCost] = useState(false);
    const [key, setKey] = useState(0);                              // for initialize the state of /react-widgets..

    const getMethodValue = () : number => {
        let result: number = 0
        for (let element of methodList) {
            if (method.id === element.id && method.name === element.name) {
                result = method.id;
                break;
            }
        }
        return result;
    }

    const methodChangeHandler = (method: Method) => {
        setMethod(method);
    };

    const methodAddButtonClickHandler = () => {
        // 카드 등록
    }

    const costChangeHandler = (event: any) => {
        let isNotNumber: boolean = /^[^1-9][^0-9]$/g.test(NumberUtils(event.target.value).deleteComma())
        || isNaN(Number(NumberUtils(event.target.value).deleteComma())) ? true : false;
        setIsValidCost(isNotNumber);
        if(!isNotNumber) setCost(BigInt(NumberUtils(event.target.value).deleteComma()).toString());
    }

    const costTypeChangeHandler = (event: any) => {
        let value = event.target.value;
        if(value === "income") setCostType(true);
        else setCostType(false);
    }

    const contentChangeHandler = (event: any) => {
        let isValidSize: boolean = event.target.value.length >= 0 ? true : false;
        setIsValidContent(isValidSize);
        if(isValidSize) setContent(event.target.value);
    }

    const getTagValues = () : Array<number> => {
        let result: Array<number> = []
        if(tags != null) {
            for (let tag of tagList) {
                if (tags.find(element => element.id === tag.id && element.name === tag.name)) {
                    result.push(tag.id);
                }
            }
        }
        return result;
    }

    const tagChangeHandler = (tags: Array<Tag>) => {
        setTags(tags);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();                 // avoid page reload
        
        const enteredData: History = {
            id: 1,
            userId: 1,
            date: date,
            by: method,
            content: content,
            cost: costType ? Number(NumberUtils(cost).deleteComma()) : (-1) * Number(NumberUtils(cost).deleteComma()),
            tags: tags,
        };

        // 등록
        //addHistory(enteredData);
        console.log(enteredData);

        initializeForm();
    }

    const initializeForm = () => {
        setDate(new Date());
        setMethod({
            id: 0,
            userId: 1,
            type: MethodType.Cash,
            name: "현금"
        });
        setContent("");
        setCost("0");
        setTags([]);
        setKey(prevKey => prevKey + 1);
    }

    return (
        <div className = {styles.addhistory}>
            <div className = {styles.addhistory_form}>
                <div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>결제<br></br>수단</div>
                        <div>
                            <ReactDropDownList key={key} data={methodList} value={method} onChange={methodChangeHandler} />
                        </div>
                        <div>
                            <Button onClick={methodAddButtonClickHandler}
                                    style={{color: "black", fontSize: "1em"}}
                            >+</Button>
                        </div>
                    </div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>금액</div>
                        <div className = {styles.addhistory_form_content}>
                            <div className = {styles.addhistory_form_content_cost_type}>
                                <div>
                                    <label htmlFor="income">수입</label>
                                    <input
                                        type="radio"
                                        id="income"
                                        value="income"
                                        onChange={costTypeChangeHandler}
                                        checked={costType}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expense">지출</label>
                                    <input
                                        type="radio"
                                        id="expense"
                                        value="expense"
                                        onChange={costTypeChangeHandler}
                                        checked={!costType}
                                        required
                                    />
                                </div>
                            </div>
                            <TextField
                                id="standard" variant="standard" fullWidth
                                value={NumberUtils(cost).addComma()}
                                onChange={costChangeHandler}
                                style={{minWidth:250}}
                            ></TextField>
                            <div className={styles.addhistory_form_error}
                                 style={{display: cost === "0" ? "block" : "none"}}>
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
                                style={{minWidth: 250}}
                            ></TextField>
                            <div className={styles.addhistory_form_error}
                                  style={{display: content.length === 0 ? "block" : "none"}}>
                                내용은 필수 입력란입니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>날짜</div>
                        <div>
                            <ReactDatePicker key={key} date={date} onChange={setDate}/>
                        </div>
                    </div>
                    <div className = {styles.addhistory_form_section}>
                        <div className = {styles.addhistory_form_title}>태그</div>
                        <div>
                            <ReactMultiSelect key={key} values={getTagValues()} data={tagList} onChange={tagChangeHandler} width="200px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.addhistory_form_button}>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary"
                            onClick={submitHandler} disabled={ cost === "0" || content.length === 0 }
                    >추가</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default AddHistoryContainer