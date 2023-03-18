import { useState, useRef } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import { MethodType } from '../../../../../assets/enums/MethodType';
import { methodList } from '../../../../../assets/testData'

import styles from './userMethodList.module.css'

const UserMethodList = ({}) => {
    const [methods, setMethods] = useState(methodList);

    const nextId = useRef(2);
    const nextUserId = useRef(1);

    const onCreate = () => {
        const method = {
            id: nextId.current,
            userId: nextUserId.current,
            type: MethodType.Card,
            name: ""
        };
        setMethods(methods.concat(method));

        nextId.current += 1;
    }

    const onRemove = (id: number) => {
        setMethods(methods.filter(method => method.id !== id));
    }

    let cards = []
    for(let i = 0; i < methodList.length; i++) {
        cards.push(
            <Card className={styles.user_method_card} sx={{ minWidth: 275 }}>
                {methodList[i].name}
                <CardActions>
                    <IconButton><DeleteIcon/></IconButton>
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