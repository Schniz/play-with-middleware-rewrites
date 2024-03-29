import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["allowed"];

/**
 * @param {NextRequest} request
 */
export default function middleware({ nextUrl }) {
  if (nextUrl.pathname.endsWith("/howdy")) {
    return NextResponse.next();
  }

  let changed = false;
  for (const key of nextUrl.searchParams.keys()) {
    if (!ALLOWED.includes(key)) {
      nextUrl.searchParams.set(key, "");
      changed = true;
    }
  }

  if (changed) {
    return NextResponse.redirect(nextUrl);
  }

  return NextResponse.rewrite(nextUrl);
}
