import React from 'react';
import Multiselect from 'react-widgets/Multiselect';

import 'react-widgets/styles.css';

const ReactMultiSelect = ({ key, values, data, onChange, width }: ReactMultiselectProps) => {
    return (
        <Multiselect
            key={key}
            dataKey="id"
            textField="name"
            defaultValue={values}
            data={data}
            filter="contains"
            onChange={onChange}
            style={{ width: width }}
       />
    );

}

interface ReactMultiselectProps {
    key: number | null;
    values: Array<number>;
    data: Array<any>;
    onChange: (values: Array<any>) => void;
    width: string
}

export default ReactMultiSelect;