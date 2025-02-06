import { SvelteKitAuth } from "@auth/sveltekit"
import Credentials from "@auth/sveltekit/providers/credentials"
import GitHub from "@auth/sveltekit/providers/github"
import { env } from "$env/dynamic/private"
import { change } from "./store"

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch('http://localhost:5173/signIn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })
        if (!response.ok) {
          return null
        } else {
          const user = await response.json()
          change(user.cookie)
          return { ...user };
        }
      },
    }),
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signIn",
    signOut: "/signOut",
  },
})