


const isEmpty = (string) => {
    if(string.trim()==='') return true
    else return false
}

const isEmail = (email) => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(emailRegEx)) return true;
    else return false
}

const isName = (name) => {
    const nameRegEx = /^[a-z ,.'-]+$/i
    if(name.match(nameRegEx)) return true;
    else return false

}

// const isNumber = (number) => {
//     const numberRegEx = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
//     if(number.value.match(numberRegEx)) return true;
//     else return false

// }


export function validateSignUp(data){
    let errors = {} // errors object

if(isEmpty(data.firstname)|| isEmpty(data.lastname)){
    errors.name = 'firstname and lastname must not be empty'
} else if (!(isName(data.firstname)|| isName(data.lastname))){
    errors.name = 'firstname and lastname must be valid'

}


// if(isEmpty(data.phoneNumber)){
//     errors.phoneNumber = 'phoneNumber must not be empty'
// } 





if(isEmpty(data.email)||isEmpty(data.password))
    {
        errors.email = 'email and password must not be empty'
    } else if (!isEmail(data.email)){
        errors.email = "Must be a valid email address"
    }


 if(isEmpty(data.handle)) errors.handle = 'handle must not be empty'

 

// if(data.password!==data.confirmPassword) errors.confirmPassword = 'Passwords must match'

// if(Object.keys(errors).length>0) return res.status(400).json(errors)


return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
}

}

export function validateSignIn(data){
    let errors = {}

if(isEmpty(data.email)||isEmpty(data.password))
    {
        errors.email = 'email and password must not be empty'
    } else if (!isEmail(data.email)){
        errors.email = "Must be a valid email address"
    }

// if(Object.keys(errors).length > 0) return res.status(400).json(errors)

return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
}


}