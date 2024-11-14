import jwt from 'jsonwebtoken';

export function EleitorAuthMiddleware(req, res, next){
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({message: 'Token não informado'});
    }
    try{
        const payload = verifyJwt(token);
        req.eleitor = payload;
        next();
    }catch(error){
        return res.status(401).json({message: 'Token inválido'});
    }
}

function verifyJwt(token){
    return jwt.verify(token, process.env.JWT_SECRET);
}