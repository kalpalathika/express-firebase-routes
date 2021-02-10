import fire from '../../../config/fire.js'


// Get own user details


export function getUser(req,res) {
    let userData = {}
    console.log('passing throughhhhhhh the getUser')

    const db = fire.firestore()
    db.doc(`/users/${req.user.handle}`).get()
        .then(doc => {
            if(doc.exists){
                userData.credentials = doc.data();
              return res.status(200).json(userData.credentials)
            }
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({error: err.code})
        })
        
}

