import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContactForm from "./AddContactForm";
import UpdateContact from "./UpdateContact";
import { DeleteContact } from "./DeleteContact";
import { ToastContainer } from 'react-toastify';



import FetchContact from "./FectchContacts";
import { useState, useEffect } from "react"

import { FetchContacts } from "../api";

function App() {

  const [contactList, setcontactList] = useState([]);



  useEffect(() => {
    FetchContacts().then((data) => {
      setcontactList(data)
     
    })
  }, [])


  const addContact = (newContact) => {
    setcontactList((prevContacts) => [newContact,...prevContacts]);
    

  };


  const UpdatetheContact =(updatedContactList)=>{
    setcontactList(updatedContactList);
  }



  
  
 
    





  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <ToastContainer/>
      <Router>
        <Routes>
          <Route exact path="/" element={<FetchContact contacts={contactList} />} />
          
          <Route exact path="/add" element={<AddContactForm onAddContact={addContact} />} />
          <Route exact path="/updatecontact/:id" element={<UpdateContact contact={contactList} onupdate={UpdatetheContact}/>} />
          <Route exact path="/deletecontact/:id" element={<DeleteContact contact={contactList} ondelete={UpdatetheContact}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
