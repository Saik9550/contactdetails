import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../index.css"
import { UpdatebyPut } from "../api"
const UpdateContact = ({ contact, onupdate }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [contactList, setcontactList] = useState(contact)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    contactList.map((contact) => {
      if (contact.id.toString() === id) {
        // console.log("where")
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
      }
      return null
    })
  }, [id, contactList])

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(contacts)

    const updatedContactList = contactList.map((contact) => {
      if (contact.id.toString() === id) {
        contact.name = name
        contact.email = email
        contact.phone = phone
      }
      return contact
    })

    setcontactList(updatedContactList)
    // console.log(contactList)
    onupdate(contactList)

    const putUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    UpdatebyPut(putUrl,name,email,phone)



    navigate("/")
  }

  return (
    <div>
      <h1>Edit Contact</h1>
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
        <button type="submit">Update Contact</button>
      </form>
    </div>
  )
}

export default UpdateContact
