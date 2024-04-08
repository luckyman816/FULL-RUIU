import NextAuth from "next-auth"

import Apple from "next-auth/providers/apple"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import axios from "axios";
import { User } from 'next-auth';

import type { NextAuthConfig } from "next-auth"
import { endpoint } from "@/environments/endpoint";

declare module "next-auth" {
    interface Session {
        data: any;
    }
}

export const config = {
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    providers: [
        Apple,
        Facebook,
        Google,
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.provider = account.provider;
                token.providerAccountId = account.providerAccountId;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.provider = token.provider;
            session.providerAccountId = token.providerAccountId;
            // const params = {
            //     name: session.user.name,
            //     email: session.user.email,
            //     provider: session.provider,
            //     photo_url: session.user.image,
            //     social_account_id: session.providerAccountId,
            // }
            // const formData = new FormData();
            // formData.append("email", params.email);
            // formData.append("name", params.name);
            // const res = await axios.post(`${endpoint}/login`, formData );
            // console.log("----------login---------", res.data);
            // session.data = res.data;
            return session;
        },
    },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
