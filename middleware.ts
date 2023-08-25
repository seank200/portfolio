import type { NextRequest } from 'next/server';
import type { SupportedLanguage } from './components/contents';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next|images|fonts|favicon).*)'],
};

const SUPPORTED_LANGS: SupportedLanguage[] = ['kr', 'en'];
const DEFAULT_LANG = SUPPORTED_LANGS[1];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathParts = pathname.split('/');
  const queryString = new URL(request.url).search;
  if (pathParts.length > 1) {
    const lang = pathParts[1];
    if (SUPPORTED_LANGS.includes(lang as SupportedLanguage)) {
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
