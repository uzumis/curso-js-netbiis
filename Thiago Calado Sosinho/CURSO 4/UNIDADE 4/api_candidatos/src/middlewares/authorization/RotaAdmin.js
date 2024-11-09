const AdminMiddleware = (req, res, next) => {
    const role = req.headers['role'];

    if (role && role.toLowerCase() === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Acesso negado: você precisa ser Admin.' });
    }
};

export default AdminMiddleware;