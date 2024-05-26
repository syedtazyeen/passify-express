
// for success
export const success = (
    { message, results, statusCode }:
        { message: string, results: any, statusCode?: number }) => {
    return {
        message,
        error: false,
        code: statusCode || 200,
        results
    };
};


// for errors
export const error = (
    { message, statusCode, errors }:
        { message: string, statusCode?: number, errors?: any }) => {

    return {
        message: message,
        code: statusCode || 500,
        error: true,
        errors: errors
    };
};


// for validation error
export const validation = ({ errors, message }: { errors?: any, message: string }) => {
    return {
        message: message,
        error: true,
        code: 422,
        errors: errors
    };
}


// for notFound error
export const notFound = ({ errors, message }: { errors?: any, message: string }) => {
    return {
        message: message,
        error: true,
        code: 404,
        errors: errors
    };
}