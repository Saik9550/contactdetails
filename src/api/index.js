

const apiurl="https://jsonplaceholder.typicode.com/users";

export const FetchContacts=()=>{
    // console.log("Fetching")
    return(fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {return data})
      .catch((error) => {
        console.log(error)
      }))
}


export const AddContacts=(contact)=>{
  console.log("AddContact invoked")
  return (fetch(apiurl, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
      .then((data) => {return data})
      .catch((error)=>{console.log(error)})
  )

}



export const UpdatebyPut=(putUrl,name,email,phone)=>{
  
  return (
  fetch(putUrl, {
    method: "PUT",
    body: JSON.stringify({
      name,
      email,
      phone,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))

 

 
  );
}
