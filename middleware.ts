function getCookie(header: string | null, name: string): string | null {
  if (!header) return null
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url)

  // Pass through static assets and Vercel internals
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/_vercel/') ||
    /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|map)$/.test(url.pathname)
  ) {
    return undefined
  }

  // Pass through the login page itself
  if (url.searchParams.has('login')) {
    return undefined
  }

  // Check auth cookie
  const cookie = getCookie(request.headers.get('cookie'), 'portfolio-auth')
  if (cookie && cookie === process.env.AUTH_PASS) {
    return undefined
  }

  // Redirect to login
  return Response.redirect(new URL('/?login', request.url), 302)
}
