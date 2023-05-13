import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({id}, "NIHAL");
}

export default generateToken;