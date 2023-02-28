import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../index.css"
import { UpdatebyPut } from "../api"

// in this component we are going to update our contact details
//  by clicking on the edit image it will route to this component which will show a form with our
// previously filled details and once we make the changes to the contact and save the the form 
// it will update the contact in our local state and redirect to the fetch Contact page

const UpdateContact = ({ contact, onupdate }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [contactList, setcontactList] = useState(contact)

// use params is to get the id parameter from the path url
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // once our component is loaded it will map through our array and when contact id matches it shows previously 
    // filled details
    contactList.map((contact) => {
      if (contact.id.toString() === id) {
      
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
      }
      return null
    })
  }, [id, contactList])

  const handleSubmit = (e) => {
    e.preventDefault()

  //  in this once the changes are made we are going to update the contact and also we update our contact list 
  // and will render the fetch contact with newly updated details

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
