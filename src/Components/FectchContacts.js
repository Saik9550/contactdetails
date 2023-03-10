
import { Link } from "react-router-dom"
import "../index.css"

// this component is fetched or rendered first when the project is started 
// it is a simple component which gets contact list as prop and will iterate through array 
// and display the contacts

const FetchContact = ({ contacts }) => {
  const contactList= contacts



  return (
    <div>
      <h1>Contact List</h1>

      <Link to="/add">Add Contact</Link>

      {contactList.map((contact) => (
        <div className="contactList" key={contact.id}>
          <li>
        
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <Link to={`/updatecontact/${contact.id}`}>
              <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="updateContact" className="editImage" />
            </Link>

           <Link to={`/deletecontact/${contact.id}`}>
           <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="deleteContact" className="editImage" />
           
           </Link> 
          </li>
        </div>
      ))}
    </div>
  )
}
export default FetchContact
