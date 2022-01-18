import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["allowed"];

/**
 * @param {NextRequest} request
 */
export default function middleware({ nextUrl }) {
  if (nextUrl.searchParams.has("clear")) {
    for (const key of nextUrl.searchParams.keys()) {
      if (!ALLOWED.includes(key)) {
        nextUrl.searchParams.set(key, "");
      }
    }
  } else if (nextUrl.searchParams.has("clear2")) {
    return NextResponse.rewrite("/api/hello?");
  } else {
    for (const key of nextUrl.searchParams.keys()) {
      if (!ALLOWED.includes(key)) {
        nextUrl.searchParams.delete(key);
      }
    }
  }

  nextUrl.searchParams.set("appended", "true");

  return NextResponse.rewrite(nextUrl);
}
