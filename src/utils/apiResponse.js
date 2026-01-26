class ApiResponse {
    constructor(statusCode, message='Request was successfull', data) {
        this.statusCode = statusCode,
        this.message = message,
        this.data = data,
        this.success = statusCode < 400 // HTTP status codes below 400 mean success

    }

}
export {ApiResponse}