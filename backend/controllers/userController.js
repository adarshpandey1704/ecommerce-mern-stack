import User from '../models/userModel.js';
import generateToken from '../config/generateToken.js';

const registerUser = async(req,res) => {
    try {
      console.log('requestBody', req.body);
    const {name, email, password, about, role} = req.body;
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400).json({
            result: "User is already exist"
        })
    }

    const user = await User.create({
        name: name, 
        email: email,
        password: password,
        about: about,
        role: role
    })

    console.log('user in backend controller', user);

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            about: about,
            role: role
        })
    }
    
    } catch(error) {
      console.log('error', error);
    }
};

const loginUser = async(req, res) => {
    try {
       const {email, password} = req.body;
       const user = await User.findOne({email, password});
    //    const matchPassword = await User.findOne

       if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            about: user.about,
            role: user.role,
            token : generateToken(user._id)
        })
       } else {
        res.status(401).json({
            result: "failed due to invalid username or password"
        })
       }
    } catch(error) {
        console.log(error);
    }
}

export {registerUser, loginUser};