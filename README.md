
# tmp notes

This example combines the `now-sapper` demo (https://github.com/beyonk-adventures/now-sapper-demo) with `with-cookie-auth-fauna` which shows how to use Now with Fauna for authentication. This also uses https://www.nielsvandermolen.com/authentication-example-svelte-sapper/ and https://github.com/sveltejs/ as a basis


`now secrets add fauna-sapper-secret-key "ENTER YOUR FAUNA SERVER KEY"`





# Serverless Sapper for Now v2 - demo

by [@antony](https://github.com/antony)

This is a demonstration of a Dynamic (i.e. not Static / Exported) [Sapper Template](https://github.com/sveltejs/sapper-template) to Now v2, using the [Now Sapper](https://github.com/thgh/now-sapper) builder.

Static assets from your application are served from the now CDN.

## Usage

Check out this project from git:

```bash
npx degit beyonk-adventures/now-sapper-demo now-sapper-demo
cd now-sapper-demo
npm i
```

and deploy it to now:

```bash
npx now
```

## Testing changes

You can deploy using a git repository as the builder. Have a look at `now.test.json`.

```bash
npm run deploy:test
```

## Local Usage (Now Dev)

At the current time, Zeit's `now dev` emulator lags significantly behind the real service, and as such, the `now-sapper` module will not work locally. You will encounter the following error:

```bash
> Now CLI 16.2.0 dev (beta) — https://zeit.co/feedback/dev
> Creating initial build
> Error! Unknown file type: undefined
```

## Caveats

Though serverless, your Sapper application will still run all routes from a single endpoint `/*`. It does not (yet) support route splitting / differential bundling. I have tried this with a hefty Sapper application, and have not found this to be an issue, though it would be optimal to add this feature.
