import React from 'react';
import DefaultButton from '../../../components/button/DefaultButton/DefaultButton';
import './ButtonPage.scss';

type ButtonProps = {
    text: string;
}

const ButtonPage :React.FC<ButtonProps> = ({text}) =>{
    return (
        <div className="page-button">
            <DefaultButton content={text} backgroundColor={`blue`} fontColor='white'/>
            <DefaultButton content={text} backgroundColor={`pink`} fontColor='white'/>
            <DefaultButton content={text} backgroundColor={`gray`} fontColor='white'/>
        </div>
    )
}

export default ButtonPage
