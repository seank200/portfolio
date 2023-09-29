import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type SupportedLang = 'en' | 'ko';

const SUPPORTED_LANGS = ['en', 'ko'];
const DEFAULT_LANG = SUPPORTED_LANGS[0];

export const config = {
  matcher: [
    '/((?!_next|images|fonts|favicon|site|apple|android|browserconfig|mstile|safari).*)',
  ],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathParts = pathname.split('/');
  const queryString = new URL(request.url).search;
  if (pathParts.length > 1) {
    const lang = pathParts[1];
    if (SUPPORTED_LANGS.includes(lang as SupportedLang)) {
      // Valid language provided
      if (lang === 'en') {
        const path = '/' + pathParts.slice(2).join('/');
        return NextResponse.redirect(new URL(path, request.url) + queryString);
      }
    } else {
      // Invalid language or language not provided
      const path = '/' + DEFAULT_LANG + (pathname === '/' ? '' : pathname);
      return NextResponse.rewrite(new URL(path, request.url) + queryString);
    }
  } else {
    // Language not provided (root path)
    const path = '/' + DEFAULT_LANG;
    return NextResponse.rewrite(new URL(path, request.url) + queryString);
  }
}
