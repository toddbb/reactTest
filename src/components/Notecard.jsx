import React from "react";

const Notecard = (props) => {

    return (
        <li key={props.index} className="notecard">
            <p className="notecard-id">{props.index}</p>
            <p className="notecard-summary">{props.note}</p>
            <button className="btn-edit" onClick={() => props.editNote(props)}>Edit</button>
        </li>        
    )
}


export default Notecard;