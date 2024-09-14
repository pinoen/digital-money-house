import axios from 'axios';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Type your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Type your password',
        },
      },
      async authorize(credentials) {
        const res = await axios.post(
          'https://digitalmoney.digitalhouse.com/api/login',
          {
            email: credentials.email,
            password: credentials.password,
          }
        );

        if (res.data.token) {
          const user = res.data;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return { ...session, ...user };
    },
  },
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
