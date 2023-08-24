import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        signIn({ user }: any) {
            return (
                /^[A-Za-z0-9._%+-]+@shopee\.com$/.test(user.email) ||
                /^[A-Za-z0-9._%+-]+@seamoney\.com$/.test(user.email) ||
                /^[A-Za-z0-9._%+-]+@seamoney\.com$/.test(user.email)
            );
        },
        redirect() {
            return "/login";
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
};

export default NextAuth(authOptions);
