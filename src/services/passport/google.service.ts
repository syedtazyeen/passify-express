import { PassportStatic } from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import prisma from '../../prisma';
import { AUTH_TYPE, GOOGLE_CLIENT, SERVER, USER_TYPE } from '../../utils/constants';



const GoogleService = (passport: PassportStatic) => {

    const options = {
        clientID: GOOGLE_CLIENT.ID,
        clientSecret: GOOGLE_CLIENT.SECRET,
        callbackURL: `v${SERVER.VERSION}/auth/o/google/callback`
    };

    passport.use(
        new GoogleStrategy(options, async (accessToken: string, refreshToken: string, profile: Profile, done) => {
            try {
                const user = {
                    googleId: profile.id,
                    name: profile._json.name,
                    email: profile._json.email,
                    image: profile._json.picture,
                    accessToken,
                    refreshToken,
                }
                try {
                    let prismaUser = await prisma.user.findUnique({
                        where: {
                            email: user.email
                        }
                    });
                    if (!prismaUser) {
                        prismaUser = await prisma.user.create({
                            data: {
                                email: user.email!,
                                name: user.name,
                                image: user.image,
                                auth: AUTH_TYPE.GOOGLE,
                                type: USER_TYPE.USER
                            }
                        });
                    }
                    return done(null, prismaUser)
                } catch (e: any) {
                    return done(e)
                }
            } catch (err) {
                return done(err);
            }
        })
    );


    passport.serializeUser(function (user: any, done) {
        done(null, user.email);
    });

    passport.deserializeUser(async function (email: string, done) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            done(null, user);
        } catch (err) {
            done(err, null)
        }
    });
};


export default GoogleService