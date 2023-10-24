# AH code demo

Hi! To try out this demo please install the dependencies and start development

```
pnpm i
pnpm dev
```

You'll then be able to access the demo at http://localhost:3000

Thanks!
Joseph - josephhughes@gmail.com

## Some notes

- I've used Turborepo to scaffold the project, as I probably would in a real world example. This is how I'd usually keep reusable code, UI and functionality separate from the web app.
- I've used TailwindCSS 100% for a few years, but decided to style this with some quick plain CSS to make it clearer as to how I'm styling it. As a result, I am just importing styles into the tsx files. In a real app I'd work out how best to keep the styles and the UI components reusable and stylable, even if just SASS and sensible class names
- Instead of importing the JSON directly into React, I thought it would be fun to set up a mock API using Nest.js. This way I could experiment with Next.js's new Api Router, which I haven't used before. Also, I had hoped to demonstrate some loading indicators/skeleton elements/API error handling, but I ran out of time.
- Nest.js App Router looks good. This is my first time, but I've used Astro.js and Nuxt, which use a similar idea
- I need to read more of the App Router docs to work out how to make an app in Next.js that offers both hydration of _some_ dynamic routes and a simple way to fetch the latest API data on the client
- Of course, real world prescription data would only be served through an authenticated, client-only API. I would set up some global state management, and cache data across page transitions
- I'd definitely move the listing code to it's own components once I'd set up global state and proper styling!
- The code doesn't look right without proper ARIA accessibility attributes. Also missing are proper styles for keyboard navigation on links and buttons

## Building

```
pnpm build
```

Building the next.js web app will work if you are running the api in dev mode. From another terminal window, start the api app separately

```
cd apps/api
pnpm dev
```

To properly develop this, Turborepo needs to have the pipeline properly setup for both dev and production, using whatever dotenv/CI/hooks magic is needed :)
