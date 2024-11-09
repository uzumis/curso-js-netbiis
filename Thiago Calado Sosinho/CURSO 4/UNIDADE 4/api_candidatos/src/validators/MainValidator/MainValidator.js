export const validateBody = (validator) => {
    return (req, res, next) => {
        const { error } = validator.validate(req.body);
        if (error) {
            const errorMessages = error.details.map(detail => detail.message); 
            return res.status(400).json({ error: errorMessages });
        }
        next();
    };
};


export const validateId = (validator) => {
    return (req, res, next) => {
        const id = req.params.id;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return res.status(400).json({ error: 'O ID deve ser um número válido.' });
        }
        const { error } = validator.validate(parsedId);
        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: errorMessages });
        }
        req.params.id = parsedId; 
        next();
    };
};