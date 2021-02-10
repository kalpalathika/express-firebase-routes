
// import { fireAdmin } from '../../utils/firestore.js'
import fire from '../../../config/fire.js'
import {validateSignUp} from '../../utils/validators.js'
import fireAdmin from '../../../config/fireAdmin.js'
// import multer from 'multer'

const db = fireAdmin.firestore()
export function userSignUp(req,res){
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
        // imageUrl: res.locals.fireImageUrl
    
    }
    // console.log("the image url is $$$$$$$$$$ " + res.locals.fireImageUrl )
    const {valid, errors } = validateSignUp(newUser)

    if(!valid) return res.status(400).json(errors)


//
// var storage = multer.diskStorage({
//     destination:"./public/uploads",
//     filename: (req,file,cb)=> {
//         cb(null,file.fieldname+"_")
//     }
// })

// Signup controller
let token, userId

db.collection('users').doc(newUser.handle).get()
    .then(doc=>{
        if(doc.exists){
            return res.status(400).json({message:"this account is already taken"})
        } else {
            return fire
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
        }
    })
    .then(data=>{
        userId = data.user.uid
         return data.user.getIdToken()
        
    })
    .then(idToken=> {
        token = idToken
        const userCredentials = {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            phoneNumber: newUser.phoneNumber,
            handle: newUser.handle,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            userId
        }
     return db.doc(`/users/${newUser.handle}`).set(userCredentials)
        
    })
    .then(()=> {
        return res.status(200).json({token})
    }

    )
    .catch(err =>{
       console.log(err)
       if(err.code === 'auth/email-already-in-use'){
           return res.status(400).json({email: 'email is already in use'})
       } else{
         return res.status(500).json({error: err.code}) 
       }

    })


}