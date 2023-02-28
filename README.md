# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


MY Project:

FetchContact Component:

Fetch contact Component is the first component which react renders which will fetch the contact details (here we are fetching name,email and phone number for easy implementaion). fetch component will also show a Add Contact button which will direct to Add Contact component.


AddContact Component:

In Add contact Component A form is displayed to add new contact details with name,email,phone as input fields and once the save contact button is clicked it will save the contact details and will render the fetchContact page again showing ewly added contact as well.

UpdateContact:

Inside Fetch Contact component each contact details will have edit icon , on clicking on it will direct to UpdateComponent which will display the form with our prevuious details available , on editing thecontact it will update the local state of contact list and will change the contact and then it redirects to Fetch Contact component which will display the updated contact details

DeleteContact:

Inside Fetch Contact component each contact details will have delete icon , on clicking on it will direct to DeleteComponent which will take the id parameter and then filter the contact list and will return an array of contact list which doesn't have the contact with the id we have provided




