import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher([
//   "/bookings(.*)",
//   "/checkout(.*)",
//   "/favorites(.*)",
//   "/profile(.*)",
//   "/rentals(.*)",
//   "/reviews(.*)",
// ]);
const isPublicRoute = createRouteMatcher(["/", "/properties(.*)"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // log user_admin_id
  //console.log((await auth()).userId);
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
