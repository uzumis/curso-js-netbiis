export const validateBody = (validator) => {
    return (req, res, next) => {
        const { error } = validator.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessages = error.details.map(detail => detail.message); 
            return res.status(400).json({ error: errorMessages });
        }
        next();
    };
};


export const validateId = (validator) => {
    return (req, res, next) => {
        const id = parseInt(req.params.id);
        const { error } = validator.validate(id);
        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: errorMessages });
        }
        next();
    };
};
