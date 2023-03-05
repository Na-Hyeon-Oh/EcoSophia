import DropdownList from 'react-widgets/DropdownList';
import { Method } from '../../../model/Method';

import 'react-widgets/styles.css';

const ReactDropDownList = ({ key, methodList, method, onChange } : ReactDropdownListProps) => {
    const getDefaultValue = () : number => {
        let result: number = 0
        for (let element of methodList) {
            if (method.id === element.id && method.name === element.name) {
                result = method.id;
                break;
            }
        }
        return result;
    }

    return (
      <DropdownList
          key={key}
          dataKey="id"
          textField="name"
          defaultValue={getDefaultValue()}
          data={methodList}
          filter="contains"
          onChange={onChange}
          style={{ width: "250px"}}
      />
    );
}

interface ReactDropdownListProps {
    key: number;
    methodList: Array<Method>;
    method: Method;
    onChange: (method: Method) => void;
}

export default ReactDropDownList;