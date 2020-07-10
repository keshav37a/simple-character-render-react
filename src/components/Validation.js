import React from 'react';

const Validation = (props)=>{
    let length = props.length;
    if(length<5){
        return(
            <div>The text is too short</div>
        )
    }
    else {
        return(
            <div>The text is long enough</div>
        )
    }
}

export default Validation;