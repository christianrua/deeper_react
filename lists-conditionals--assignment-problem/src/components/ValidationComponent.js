import React from 'react';

const ValidationComponent = (props) => {

    /* Another aproach
        
        let validationMessgae = 'Text long enough'

        if(props.inputLength <= 5) {
            vallidationMessage = 'Text too short';
        }

        return (
            <div>
                <p>{validationMessage}</p>
            </div>    
        );

    */


    return (<div>
         <p>{props.len <= 5 ? "Text too short" : "Text long enough"}</p> 
    </div>

    )
};

export default ValidationComponent;