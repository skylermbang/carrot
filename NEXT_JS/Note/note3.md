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