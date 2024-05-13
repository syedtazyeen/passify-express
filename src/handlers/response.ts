
// for success
export const success = (
    { message, results, statusCode }:
        { message: string, results: any, statusCode: number }) => {
    return {
        message,
        error: false,
        code: statusCode,
        results
    };
};


// for errors
export const error = (
    { message, statusCode }:
        { message: string, statusCode: number }) => {
    // List of common HTTP request code
    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    const findCode = codes.find((code) => code == statusCode);

    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return {
        message,
        code: statusCode,
        error: true
    };
};


// for validation error
export const validation = ({ errors }: { errors: any }) => {
    return {
        message: "Validation errors",
        error: true,
        code: 422,
        errors
    };
}