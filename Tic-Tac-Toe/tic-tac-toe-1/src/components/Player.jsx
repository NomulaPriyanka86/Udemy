import { useState } from "react";

export default function Player({name,symbol}){
    const[isEditing,setIsEditing]=useState(false);
    
    function handleEditClick(){
        // setIsEditing(!isEditing );
        // // or    both have same result
        //     // setIsEditing(isEditing ? false : true);
        // it is the best practise to update the latest state value by using arrow functions
        setIsEditing((editing)=>!editing);
        }
    
    let playerName=<span className='player-name'>{name}</span>;
 //btnCaption="Edit";

    if(isEditing){
        playerName=<input type="text" required value={name}/>
        //btnCaption="save";
    }

    return(
        <li>
          <span className='player'>
          {playerName}
          <span className='player-symbol'>{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}