import React from 'react';
import './DefaultTextView.scss';

type TextViewProps = {
    content: string;
}

const DefaultTextView : React.FC<TextViewProps> = ({content}) =>{

    return (
        <div>{content}</div>
    )
}

export default DefaultTextView