import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/bookings(.*)",
  "/checkout(.*)",
  "/favorites(.*)",
  "/profile(.*)",
  "/rentals(.*)",
  "/reviews(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
