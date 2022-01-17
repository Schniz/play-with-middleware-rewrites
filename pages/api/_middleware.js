import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["allowed"];

/**
 * @param {NextRequest} request
 */
export default function middleware({ nextUrl }) {
  if (nextUrl.searchParams.has("clear")) {
    nextUrl.search = "";
  } else {
    for (const key of nextUrl.searchParams.keys()) {
      if (!ALLOWED.includes(key)) {
        nextUrl.searchParams.delete(key);
      }
    }
  }
  return NextResponse.rewrite(nextUrl);
}
