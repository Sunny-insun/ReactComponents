import React from 'react';
import './DefaultButton.scss';

type ButtonProps = {
    content: string;
    backgroundColor: string;
    fontColor:string;
}

const Button :React.FC<ButtonProps> = ({content,backgroundColor,fontColor}) =>{
    return (
        <span className="default_button_wrap">
            <button className={`default_button_${backgroundColor} font_${fontColor}`}>
                {content}
            </button>
        </span>
    )
}


export default Button
