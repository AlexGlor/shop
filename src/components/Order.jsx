import React from "react";
import {PiTrashSimpleLight} from 'react-icons/pi';

export default function Order(props){

    return(
        <div className="item">
            
        <img src={"./images/"+props.item.img}/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}</b>
        <PiTrashSimpleLight className="delete-icon" on onClick={()=> props.onDelete(props.item.id)}/>
    </div>

        
    );
}