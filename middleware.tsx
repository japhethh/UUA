import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
  // Get country from Vercel's edge header
  const country = request.headers.get('x-vercel-ip-country');
  let locale = 'en'; // default to English/USD

  // For local development, force PH (Peso)
  if (!country) {
    locale = 'ph';
  console.log('Detected country:', country);  

  } else {
    if (country === 'PH') locale = 'ph'; // Philippines = Peso
    if (country === 'US') locale = 'en'; // US = USD
  }

  // Debug log (will show in Vercel/Edge logs, not browser)
  // console.log('Detected country:', country, 'Locale set:', locale);

  // Set cookie for locale with expiration (1 hour = 3600 seconds)
  const response = NextResponse.next();
  response.cookies.set('locale', locale, { path: '/', maxAge: 3600 });
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};
