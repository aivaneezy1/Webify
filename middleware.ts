import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/:dynamic/:dynamic"]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Existing pattern to exclude static assets
    "/(api|trpc)(.*)", // Existing API pattern
    "/:dynamic1/:dynamic2", // Root-level dynamic routes with two params
  ],
};
