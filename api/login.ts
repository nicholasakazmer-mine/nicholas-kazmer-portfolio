export const config = { runtime: 'edge' }

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let password: string
  try {
    const body = await request.json()
    password = body.password
  } catch {
    return new Response('Invalid request', { status: 400 })
  }

  if (password && password === process.env.AUTH_PASS) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `portfolio-auth=${encodeURIComponent(process.env.AUTH_PASS!)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800`,
      },
    })
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  })
}
