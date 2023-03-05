import ReactMultiSelect from '../../../../components/multiSelect/MultiSelect';
import { Method } from '../../../../../model/Method';

import styles from './methodFilter.module.css';

const MethodFilter = ({ methodList, filter, onChangeFilter } : MethodFilterProps) => {
    const getMethodValues = () : Array<number> => {
        let result: Array<number> = []
        if(filter != null) {
            for (let method of methodList) {
                if (filter.find(element => element.id === method.id && element.name === method.name)) {
                    result.push(method.id);
                }
            }
        }
        return result;
    }

    return (
      <div className={styles.method_filter}>
          <ReactMultiSelect key={null} values={getMethodValues()} data={methodList} onChange={onChangeFilter} width="100%"/>
      </div>
    );
}

interface MethodFilterProps {
    methodList: Array<Method>;
    filter: Array<Method>;
    onChangeFilter: (methods: Array<Method>) => void;
}

export default MethodFilter;