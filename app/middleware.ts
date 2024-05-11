import { NextRequest, NextResponse } from "next/server";
import { APP_ROUTES } from "./utils/constants/route.constants";
import { EnumTokens } from "./utils/constants/auth.constants";

export async function middleware(request: NextRequest, response: NextResponse) {
  // const { url, cookies } = request;

  // const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  console.log("refreshToken", request);

  //   const isAuthPage = url.includes("/auth");

  //   if (isAuthPage && refreshToken) {
  //     return NextResponse.redirect(new URL(APP_ROUTES.MAIN, url));
  //   }

  //   if (isAuthPage) {
  //     return NextResponse.next();
  //   }

  //   if (!refreshToken) {
  //     return NextResponse.redirect(new URL("/auth", request.url));
  //   }

  // return NextResponse.next();
}

// export const config = {
// 	matcher: ['/i/:path*', '/auth/:path']
// }
