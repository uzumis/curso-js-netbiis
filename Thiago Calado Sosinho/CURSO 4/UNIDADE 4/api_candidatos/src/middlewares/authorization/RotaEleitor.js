const EleitorMiddleware = (req, res, next) => {
    const role = req.headers['role'];

    if (role && role.toLowerCase() === 'eleitor') {
        next();
    } else {
        res.status(401).json({ message: 'Acesso negado: você precisa ser Eleitor.' });
    }
};

export default EleitorMiddleware;
