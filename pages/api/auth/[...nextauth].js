import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  theme: {
    colorScheme: "light",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
