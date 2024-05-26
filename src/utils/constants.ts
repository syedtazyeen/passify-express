export const SERVER = {
    NAME: "rest-api",
    VERSION: process.env.API_VERSION || "1",
    PORT: process.env.PORT || 1000
}


export const CLIENT = {
    BASE_URL: process.env.CLIENT_BASE_URL!,
    TYPE: "React",
}

export const SESSION = {
    NAME: "express-session",
    SECRET: process.env.EXPRESS_SESSION_SECRET!,
    AGE: 24 * 60 * 60 * 1000 // 1 day
}

export const GOOGLE_CLIENT = {
    ID: process.env.GOOGLE_CLIENT_ID!,
    SECRET: process.env.GOOGLE_CLIENT_SECRET!
}


export const AUTH_TYPE = {
    GOOGLE: "google",
    APPLE: "apple",
    FACEBOOK: "facebook",
    EMAIL: "email"
}

export const USER_TYPE = {
    CREATOR: "creator",
    USER: "user"
}

