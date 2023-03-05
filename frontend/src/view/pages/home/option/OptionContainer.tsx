import { CalendarType } from '../../../../assets/enums/CalendarType';

import MethodFilter from './filter/MethodFilter';
import CalendarOption from './calendar/CalendarOption';
import { Method } from '../../../../model/Method';

import styles from './option.module.css';

const OptionContainer = ({ methodList, filter, onChangeFilter, calendarOption, onClickCalendarOption } : OptionProps) => {
    return (
      <div>
          <MethodFilter methodList={methodList} filter={filter} onChangeFilter={onChangeFilter}/>
          <CalendarOption selectedOption={calendarOption} onClick={onClickCalendarOption}/>
      </div>
    );
}

interface OptionProps {
    methodList: Array<Method>;
    filter: Array<Method>;
    onChangeFilter: (methods: Array<Method>) => void;
    calendarOption: CalendarType;
    onClickCalendarOption: (option: CalendarType) => void;
}

export default OptionContainer;