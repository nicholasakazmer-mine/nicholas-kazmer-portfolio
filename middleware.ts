export default function middleware(request: Request): Response | undefined {
  const authHeader = request.headers.get("authorization")

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ")
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded)
      const [user, pass] = decoded.split(":")

      // Credentials are read from environment variables set in Vercel
      if (
        user === process.env.AUTH_USER &&
        pass === process.env.AUTH_PASS
      ) {
        return undefined // pass through
      }
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Portfolio"',
    },
  })
}
