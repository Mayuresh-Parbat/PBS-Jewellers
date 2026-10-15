class apiError extends Error {
    constructor(
        statusCode,
        message = "Somthing went wrong",
        errors = [],
        stack = ""
