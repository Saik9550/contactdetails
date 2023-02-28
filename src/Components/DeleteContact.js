import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import React from "react";



export const DeleteContact=React.memo(({contact,ondelete})=>{

    const [contactList, setcontactList] = useState(contact)
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        const updatedContactList = contactList.filter(
            (contact) => contact.id.toString() !== id.toString()
          );

         
            setcontactList(updatedContactList);
          ondelete(updatedContactList);
          navigate("/");
          
          

          

    },[contactList, ondelete, navigate, id])




       

      
   
})