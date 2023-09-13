let contactUs = document.getElementById ('new-contact')
contactUs.addEventListener ('submit', function (e){e.preventDefault()
    const firstNameField = document.getElementById (firstname)
const lastNameField = document.getElementById (lastname)
const phoneField = document.getElementById (contact)
const emailField = document.getElementById (email)

const newContact = {
    firstName : firstNameField,
    lastName : lastNameField,
    contact :phoneField,
    email : emailField,
}
console.log (newContact)

})

 

