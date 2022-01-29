import React from "react";

const  EditableRow= ({editFormProduct , handleEditFormChange}) => {
    return ( 
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Title"
                name="title" 
                value={editFormProduct.title}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                type="text"
                required="required"
                name="price"
                placeholder="0.00"
                value={editFormProduct.price}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                name= "id"
                placeholder="id"
                required="required"
                value={editFormProduct.id}
                onChange={handleEditFormChange}
                />
            </td>

            <td>
                <input
                    type="text"
                    name= "category"
                    placeholder="category"
                    required="required"
                    value={editFormProduct.category}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type= "submit">Save</button>
            </td>
        </tr>
     );
}
 
export default EditableRow;