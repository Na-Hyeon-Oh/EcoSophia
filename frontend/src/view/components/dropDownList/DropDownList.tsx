import DropdownList from 'react-widgets/DropdownList';
import { Method } from '../../../model/Method';

import 'react-widgets/styles.css';

const ReactDropDownList = ({ key, data, value, onChange } : ReactDropdownListProps) => {
    return (
      <DropdownList
          key={key}
          dataKey="id"
          textField="name"
          defaultValue={value}
          data={data}
          filter="contains"
          onChange={onChange}
          style={{ width: "250px"}}
      />
    );
}

interface ReactDropdownListProps {
    key: number;
    data: Array<any>;
    value: any;
    onChange: (method: any) => void;
}

export default ReactDropDownList;