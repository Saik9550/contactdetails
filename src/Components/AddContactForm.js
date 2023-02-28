import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"
import { AddContacts } from "../api"
import { v4 as uuidv4 } from "uuid"

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

    AddContacts(contact)
      .then((data) => {
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
