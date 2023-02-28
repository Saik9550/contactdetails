import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Deletebydelete } from "../api"

// In this we are going to delete the contact based on the id
export const DeleteContact = ({ contact, ondelete }) => {
  const [contactList, setcontactList] = useState(contact)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // below we are going to filter the array and return the array of contacts which will not contain the contact details
    // of the id we are passing
    const updatedContactList = contactList.filter(
      (contact) => contact.id.toString() !== id.toString()
    )

    setcontactList(updatedContactList)
    ondelete(updatedContactList)
    navigate("/")

    const putUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    Deletebydelete(putUrl);

  }, [contactList, ondelete, navigate, id])
}
