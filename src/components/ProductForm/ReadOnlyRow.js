import React from "react";

const ReadOnlyRow = ({contract, handleEditClick}) => {
    return (
    <tr>
        <td>{contract.title}</td>
        <td>{contract.price}</td>
        <td>{contract.id}</td>
        <td>{contract.category}</td>
        <td><button onClick={(event)=>{handleEditClick(event, contract)}} className="btn btn-link">edit</button></td>
    </tr> 
    );
}
 
export default ReadOnlyRow;