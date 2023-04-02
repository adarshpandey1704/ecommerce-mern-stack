import User from '../models/userModel.js';

const registerUser = async(req,res) => {
    try {
    //   console.log('requestBody', req.body);
    const {name, email, password, about} = req.body;
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400).json({
            result: "User is already exis"
        })
    }

    const user = await User.create({
        name: name, 
        email: email,
        password: password,
        about: about
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    
    } catch(error) {
      console.log('error', error);
    }
};

const loginUser = (req, res) => {
    console.log('hello from login user controller');
    res.send("hello login controller")
}

export {registerUser, loginUser};