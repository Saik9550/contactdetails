import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"
import { AddContacts } from "../api"
import { v4 as uuidv4 } from "uuid"

// in this function we will fill the form and send the data to onAddContact prop which will insert the newly added contact to
// contactList and will route to fetchcontact list
const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const contact = {
      name,
      email,
      phone,
    }
  //  AddContacts function is delcared in api which sends a post request 
    AddContacts(contact)
      .then((data) => {
        // using uuid package to generate a unique id to the contact whenever we generate a new contact
        data.id = uuidv4()
        onAddContact(data)
        navigate("/")
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Save Contact</button>
      </form>
    </div>
  )
}

export default AddContactForm
