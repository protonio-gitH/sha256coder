import React from "react";
import { useState } from "react";
import sha256 from "sha256"
import "./Coder.css"


const Sha256Coder=() =>{

    const [text,setText] = useState('')
    const [performedValue, setPerformedValue] = useState('')


    function codeText(){
        return setPerformedValue(sha256(text))
        
    } 

    return(
        <div className="main">
            <div>
            <textarea className="inputBox" placeholder="Input" value={text} onChange={event => setText(event.target.value)}/>
            </div>
            <button onClick={codeText} className="codeButt">
                Hash
            </button>
            <div>
            <textarea className="inputBox" value={performedValue} placeholder="Output"/>
            </div>
        </div>
    )
}

export default Sha256Coder