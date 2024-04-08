import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/img-gen", "/index-one"];
const unprotectedRoutes = ["/sign-in"];

import { auth } from "@/services/auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();
  // console.log(session);

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix)
  );

  if (!session && isProtectedRoute) {
    const absoluteURL = new URL("/sign-in", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (session && unprotectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
