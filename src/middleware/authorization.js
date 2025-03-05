import jwt from 'jsonwebtoken'

export const authorizationMiddleware = (req, res, next) => {
    const { authorization } = req.header;
    if (!authorization) 
        return res.json({ message: "Unauthorization" }) 
    const token = authorization.split(' ')[1]
    
    try {
        jwt.verify(token, "nuuts")
        next();
    }   catch (err) {
        return res.json({ message: "error", err })
    }
}