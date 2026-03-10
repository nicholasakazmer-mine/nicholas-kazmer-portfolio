import { useState, type FormEvent } from 'react'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include',
      })

      if (res.ok) {
        window.location.href = '/'
      } else {
        setError(true)
        setLoading(false)
      }
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-brand">Nick Kazmer</div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label className="login-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false) }}
              className={`login-input${error ? ' login-input-error' : ''}`}
              placeholder="Enter password"
              autoFocus
              autoComplete="current-password"
            />
            {error && <div className="login-error">Incorrect password</div>}
          </div>
          <button
            type="submit"
            className="login-submit"
            disabled={loading || !password}
          >
            {loading ? 'Checking...' : 'Unlock →'}
          </button>
        </form>
      </div>
    </div>
  )
}
