import { NextRequest, NextResponse } from "next/server";
import alParser from "accept-language";
import { LANG_DEFAULT, isMyLang, myLangs } from "@lib/i18n";
import { splitPath } from "@lib/path";

export const config = {
  matcher: [
    "/((?!_next|images|assets|fonts|api|files|favicon|site|apple|android|browserconfig|mstile|safari).*)",
  ],
};

alParser.languages(myLangs);
export function middleware(req: NextRequest) {
  const url = req.url;
  const query = new URL(url).search;
  const pathparts = splitPath(req.nextUrl.pathname);

  if (pathparts.at(0) === "linkedin" || pathparts.at(0) === "in") {
    return NextResponse.redirect("https://linkedin.com/in/youngwoo-kim-sean/");
  } else if (pathparts.at(0) === "github" || pathparts.at(0) === "git") {
    return NextResponse.redirect("https://github.com/seanK200");
  }

  // Add detected language to path if not explicitly provided
  if (!isMyLang(pathparts[0])) {
    // ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
    const userLang = alParser.get(req.headers.get("Accept-Language"));
    pathparts.splice(0, 0, userLang || LANG_DEFAULT);
  }

  // Default path leads to portfolio, unless otherwise specified
  if (pathparts[1] !== "portfolio" && pathparts[1] !== "blog") {
    pathparts.splice(1, 0, "portfolio");
  }

  const pathname = "/" + pathparts.join("/");
  const newUrl = new URL(pathname, req.url) + query;

  // console.log(`[${new Date().toISOString()}] <middleware> ${req.nextUrl.pathname} -> ${pathname}`);

  return NextResponse.rewrite(newUrl);
}
