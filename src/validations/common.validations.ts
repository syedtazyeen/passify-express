import { checkSchema } from 'express-validator';

export const objectIDValidator = checkSchema({
    id: {
        in: ['query'],
        custom: {
            options: (value, { }) => {
                switch (true) {
                    case !value:
                        throw new Error("ID is required");
                    case value.trim() === "":
                        throw new Error("ID cannot be empty");
                    case typeof value !== "string":
                        throw new Error("ID should be string");
                    case !/^[0-9a-fA-F]{24}$/.test(value):
                        throw new Error("Invalid ID format [0-9a-fA-F]{24}");
                    default:
                        return true;
                }
            },
        },
        trim: true,
        escape: true,
    },
});
