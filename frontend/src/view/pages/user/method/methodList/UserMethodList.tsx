import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../../../../redux/store';
import { fetchMethod, removeMethod } from '../../../../../redux/actions/method';

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import { IoMdRemoveCircle } from 'react-icons/io';
import { MethodType } from '../../../../../assets/enums/MethodType';
import { methodList } from '../../../../../assets/testData'

import styles from './userMethodList.module.css'

const UserMethodList = ({}) => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const userId = useSelector((state: RootState) => state.auth.userId);
    const methodList = useSelector((state: RootState) => state.method.data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            dispatch(fetchMethod(userId)).then(() => setLoading(false));
        }
    }, [dispatch, userId]);

    const onRemove = async (id: number) => {
        if (userId) {
            await dispatch(removeMethod(userId, id));
        }
    }

    let cards = []
    for(let i = 0; i < methodList.length; i++) {
        cards.push(
            <Card className={styles.user_method_card} sx={{ minWidth: 275 }}>
                {methodList[i].name}
                <CardActions>
                    <IconButton onClick={() => onRemove(methodList[i].id) }>{
                        <IoMdRemoveCircle/>
                    }</IconButton>
                </CardActions>
            </Card>
        );
    }

    return (
        <div className={styles.user_method_list_container}>
            {cards}
        </div>
    );
}

export default UserMethodList