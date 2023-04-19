import Tag from '../../../model/Tag';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Chip from '@mui/material/Chip';
import ColorUtils from '../../../assets/utils/ColorUtils';
import IconButton from '@mui/material/IconButton'
import { IoMdRemoveCircle } from 'react-icons/io';

import styles from './accordionCard.module.css';

const AccordionCard = ({smallLeftText, smallRightText, leftText, rightText, tags, color, id, onRemove} : CardProps) => {
    let tagChips = []
    for(let i = 0; i < tags.length; i++) {
        tagChips.push(
            <Chip label={tags[i].name}
                  style={{
                      backgroundColor:ColorUtils().getRandomColor(),
                      fontSize:"12px",
                      fontWeight:"600",
                      marginRight: "5px"
            }}/>
        );
    }

    return (
        <Accordion className={styles.card} style={{borderColor:color}}>
            <AccordionSummary>
                <div className={styles.card_main_text}>
                    <div className={styles.left_text}>{leftText}</div>
                    <div className={styles.right_text}>{rightText}</div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.card_small_text}>
                    <div className={styles.left_text}>{smallLeftText}</div>
                    <div className={styles.right_text}>{smallRightText}</div>
                </div>
                <div className={styles.card_tags}>{tagChips}</div>
                <div>
                    <IconButton onClick={() => onRemove(id)}>{
                        <IoMdRemoveCircle/>
                    }</IconButton>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

interface CardProps {
    smallLeftText: string;
    smallRightText: string;
    leftText: string;
    rightText: string | number;
    tags: Array<Tag>;
    color: string;
    id: number;
    onRemove: (id: number) => void
}

export default AccordionCard;