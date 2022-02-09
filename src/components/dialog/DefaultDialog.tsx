import React from 'react';
import './DefaultDialog.scss';

type DailogProps = {
    content: string,
    okButtonText: string|null,
    cancelButtonText: string|null,
    okButtonCallback: Function|null,
    cancelButtonCallback: Function|null,
}

const DefaultDialog : React.FC<DailogProps>= ({content, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback}) => {
    return(
        <div className="dialog_default">

        </div>
    )

}