import React, { Fragment } from 'react';
import { useState } from 'react';
import './ProductForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import {productActions} from '../../store/Products/action'

function ProductForm(props) {
    console.log(props);
    const dispatch = useDispatch();
    const productsList = useSelector(
        (state) => state.product.products
      );
      console.log(productsList)
    const columns = [
        {header:'ID', name:'id'},
        {header:'Name', name:'title'},
        {header:'Price', name:'price'},
    ];

    const [editContactId,setEditContactId]=useState(null)
    const [contracts, setContracts]= useState(productsList);
    const [editFormProduct, setEditFormProduct]= useState({
        title:"",
        price:"",
        id:"",
        category:"",
    })

    const handleEditFormChange = (event) =>{
        event.preventDefault();
        const fieldName= event.target.getAttribute("name");
        const fieldValue= event.target.value

        const newFormData = {...editFormProduct };
        newFormData[fieldName] =fieldValue;

        setEditFormProduct(newFormData);
    }

    const handleEditClick = (event,contract) => {
        event.preventDefault(); 
        console.log(contract);
        setEditContactId(contract.id);
        const formValues = {
            title: contract.title,
            price: contract.price,
            id: contract.id,
            category: contract.category

        }
        setEditFormProduct(formValues)
    }

    const handleEditFormSubmit = (event) =>{
        event.preventDefault();
        const editedContract = {
            title:editFormProduct.title,
            price:editFormProduct.price,
            id :editContactId,
            category:editFormProduct.category,
        }
        const newContracts =[...contracts];
        const index= contracts.findIndex((contract)=> contract.id===editContactId);
        newContracts[index]= editedContract;
        
        console.log(editedContract);
        setContracts(newContracts);
        setEditContactId(null)

        dispatch(productActions.editProduct(editedContract,index));
    }

    return( 
        <div className='app-container'>
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>ID</th>
                        <th>Category</th>
                        <th></th>  
                    </tr> 
                </thead>
                <tbody>
                   {contracts.map((contract, index) =>{
                       console.log(contract); 
                       console.log(editContactId);
                   return (
                       <Fragment>
                            {(editContactId === index) ? 
                            <EditableRow editFormProduct={editFormProduct} handleEditFormChange={handleEditFormChange}/>:
                            <ReadOnlyRow contract={contract} handleEditClick={handleEditClick}/>}
                        </Fragment>
                   )})} 
                </tbody>
            </table>
            </form>
        </div>

    )

    
}

export default ProductForm;
