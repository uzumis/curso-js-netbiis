import jwt from 'jsonwebtoken';

const AdminMiddleware = (req, res, next) => {

    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token não informado' });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload.perfil !== 2) {
            return res.status(403).json({ message: 'Acesso negado: você precisa ser Eleitor.' });
        }
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Erro de token' });
    }
};

export default AdminMiddleware;
