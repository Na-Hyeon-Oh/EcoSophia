import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import Tag from '../../../model/Tag';

import './styles.css';

const ReactTagInput = ({ tags, onAddition, onDelete }: ReactTagInputProps) => {
    const tagList: Array<Tag> = [
        { id: '1', text: "식비" },
        { id: '2', text: "카페/디저트" },
        { id: '3', text: "미용" },
        { id: '4', text: "여가"},
        { id: '5', text: "저축/투자" },
        { id: '6', text: "양육비" },
        { id: '7', text: "생활비" },
        { id: '10', text: "기타" }
    ];

    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleTagClick = (index : number) => {
        console.log('The tag at index ' + index + ' was clicked');
    };

    return (
        <ReactTags
            tags={tags}
            suggestions={tagList}
            delimiters={delimiters}
            handleAddition={onAddition}
            handleDelete={onDelete}
            handleTagClick={handleTagClick}
            inputFieldPosition="top"
            autocomplete
        />
    );

}

interface ReactTagInputProps {
    tags: Array<Tag>;
    onAddition: (tag: Tag) => void;
    onDelete: (index: number) => void;
}

export default ReactTagInput;