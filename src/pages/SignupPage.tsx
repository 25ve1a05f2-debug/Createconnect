import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../auth'

export function SignupPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState<'client' | 'professional'>('client')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    const { data, error } = await signUp(
      email,
      password,
      fullName,
      role
    )

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setLoading(false)

    if (data.session) {
      navigate('/')
    } else {
      setMessage(
        'Account created! Please check your email to confirm your account.'
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Join CreateConnect</h1>

        <p className="mt-2 text-gray-600">
          Create your account and connect with creative professionals.
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none"
              placeholder="At least 6 characters"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              I want to
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('client')}
                className={`rounded-lg border px-3 py-3 text-sm font-medium ${
                  role === 'client'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200'
                }`}
              >
                Hire Talent
              </button>

              <button
                type="button"
                onClick={() => setRole('professional')}
                className={`rounded-lg border px-3 py-3 text-sm font-medium ${
                  role === 'professional'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200'
                }`}
              >
                Find Projects
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          {message && (
            <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-purple-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}