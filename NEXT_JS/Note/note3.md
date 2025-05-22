📦 Fetching Data in Next.js (App Router)
❌ Client-Side Fetching (Not Ideal)
Fetching everything on the client (e.g., via useEffect) can:

Expose sensitive endpoints or logic

Lead to unnecessary round trips and slower perceived performance

Current Flow (Client-Side Fetching):

React App → API → Database → API → React App

✅ Server-Side Fetching (with Server Components)
Server components allow you to fetch data on the server before sending HTML to the client.

No need for useState or useEffect for initial data.

Cleaner, more secure, and better performance.

Improved Flow (Server Components):
Server Component → Database → Return Data → Hydrate on Client


 Why Is Loading State Important?
With server fetching, the user has to wait until data is fetched before anything is shown.

A loading state ensures a smoother UX by giving users feedback (e.g., skeletons, spinners).

Next.js caches server-fetched data by default (especially with fetch() in server components).

Previously: Client fetched everything after page load.

Now: Server prepares everything and sends a complete page → faster initial load, better SEO.


Streaming
Backend keeps sending data to the frontend bit by bit, so the page can start rendering before everything finishes.

Suspense
React feature to show a fallback (like <h1>Loading...</h1>) while waiting for a component to load or render.

   <Suspense fallback={<h1>Loading Movie Info </h1>}> 
      <MovieVideos id={id}/>
      </Suspense >

Parallel API Request
Use Promise.all to run multiple API calls at the same time (fails if any one fails).
Can also use Suspense if components support it



Loading UI
loading.tsx → Page-level loading

Suspense → Component-level loading (like server components)

