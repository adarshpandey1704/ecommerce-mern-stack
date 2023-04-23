import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
          token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = await User.findById(decoded.id).select('-password');
          console.log('reqUser', req.user);
        } catch(error) {
            console.log('error', error);
            res.status(401).json({
                result: "Unauthorized User"
            })
        }
    }
    if(!token) {
        res.status(401).json({
            result: "Unauthorized User"
        })
    }
    next();
}

export { protect };