import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["allowed"];

/**
 * @param {NextRequest} request
 */
export default function middleware(request) {
  for (const key of request.nextUrl.searchParams.keys()) {
    if (!ALLOWED.includes(key)) {
      request.nextUrl.searchParams.delete(key);
    }
  }
  return NextResponse.rewrite(request.nextUrl);
}
