# Nextjs Oauth

Nextjs project using github Oauth

## Env

Create a .env file with 
```
GITHUB_ID=xxxxxxxxxxx
GITHUB_SECRET=xxxxxxxxxxx
NEXTAUTH_SECRET=xxxxxxxxxxx
NEXTAUTH_URL=http://localhost:3000
```
Being, Github Id and Secret created in [github developer settings](https://github.com/settings/developers "github developer settings")
nextauth secret a random string to hash tokens and keys
and nextauth url the url the project is currently on

## Running

run `npm install` and then `npm run dev`