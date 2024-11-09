import AppError from "../errors/AppError.js"
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        res.status9(err.satusCode).send({ message: err.message });
    } else {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
}

export default ErrorHandler;