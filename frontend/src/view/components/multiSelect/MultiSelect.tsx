import React from 'react';
import Multiselect from 'react-widgets/Multiselect';
import Tag from '../../../model/Tag';

import 'react-widgets/styles.css';

const ReactMultiSelect = ({ key, tags, onChange }: ReactMultiselectProps) => {
    const tagList: Array<Tag> = [
        { id: 1, name: "식비" },
        { id: 2, name: "카페/디저트" },
        { id: 3, name: "미용" },
        { id: 4, name: "여가"},
        { id: 5, name: "저축/투자" },
        { id: 6, name: "양육비" },
        { id: 7, name: "생활비" },
        { id: 10, name: "기타" }
    ];

    const getDefaultValues = () : Array<number> => {
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

    return (
        <Multiselect
            key={key}
            dataKey="id"
            textField="name"
            defaultValue={getDefaultValues()}
            data={tagList}
            filter="contains"
            onChange={onChange}
            style={{ width: "200px"}}
       />
    );

}

interface ReactMultiselectProps {
    key: number;
    tags: Array<Tag> | null;
    onChange: (tags: Array<Tag>) => void;
}

export default ReactMultiSelect;