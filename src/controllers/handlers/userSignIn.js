
// import { db } from '../../utils/firestore.js'
import fire from '../../../config/fire.js'

import {validateSignIn} from '../../utils/validators.js'
import fireAdmin from '../../../config/fireAdmin.js'

const db = fireAdmin.firestore()


export function userSignIn(req,res){
    const user = {
        email: req.body.email,
        password: req.body.password
    }


    const {valid, errors } = validateSignIn(user)

    if(!valid) return res.status(400).json(errors)

// form - validation (Helper function)

fire.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
        return data.user.getIdToken()
    })
    .then(token => {
        return res.json({token})
    })
    .catch((err)=> {
        if(err.code === 'auth/wrong-password'){
            return res.status(403).json({general: 'wrong credentials, please try again! '})
        }else{
            return res.status(500).json({error: err.code})

        }
    })

}
