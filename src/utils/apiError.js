class ApiError extends Error {
    constructor(
        statusCode, 
        message= "Something went wrong!",
        errors= [],
        stack= "", 
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack;
        }
        else {
            // starts stack trace from actual error point
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export {ApiError}