import Tag from '../../../model/Tag';
import MultiSelect from '../../components/multiSelect/MultiSelect';
import Chip from '@mui/material/Chip';
import ColorUtils from '../../../assets/utils/ColorUtils';

import styles from './card.module.css';

const Card = ({smallLeftText, smallRightText, leftText, rightText, tags, color} : CardProps) => {
    let tagChips = []
    for(let i = 0; i < tags.length; i++) {
        tagChips.push(
            <Chip label={tags[i].name}
                  style={{
                      backgroundColor:ColorUtils().getRandomColor(),
                      fontSize:"12px",
                      marginRight: "5px"
            }}/>
        );
    }

    return (
      <div className={styles.card} style={{borderColor:color}}>
          <div className={styles.card_small_text}>
              <div className={styles.left_text}>{smallLeftText}</div>
              <div className={styles.right_text}>{smallRightText}</div>
          </div>
          <div className={styles.card_main_text}>
              <div className={styles.left_text}>{leftText}</div>
              <div className={styles.right_text}>{rightText}</div>
          </div>
          <div className={styles.card_tags}>{tagChips}</div>
      </div>
    );
}

interface CardProps {
    smallLeftText: string;
    smallRightText: string;
    leftText: string;
    rightText: string | number;
    tags: Array<Tag>;
    color: string;
}

export default Card;