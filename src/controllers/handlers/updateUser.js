import { validateSignUp } from '../../utils/validators.js';
import fire from '../../../config/fire.js'


export function updateUser(req, res) {
    // console.log('$$$$$$$$$$$$' + req.body.lastname)
    const UpdateUser = {
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


    const db = fire.firestore()
    // let userDetails = req.body;
    db.doc(`/users/${req.user.handle}`).update(updateUser)
        .then(() => {
            console.log(updateUser)
            return res.json({ message: 'Details added successfully' });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ error: err.code });
        });




}
