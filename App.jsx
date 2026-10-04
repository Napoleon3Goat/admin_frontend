import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabase'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  // session = who is logged in (null = nobody). undefined = still checking.
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    // 1. On page load, ask Supabase if someone is already logged in.
    supabase.auth.getSession().then(({ data }) => setSession(data.session))

    // 2. Listen for future log-ins and log-outs, and update `session` each time.
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  if (session === undefined) {
    return <div className="center-screen">Loading…</div>
  }

  return (
    <Routes>
      <Route path="/login" element={session ? <Navigate to="/" replace /> : <Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute session={session}>
            <Dashboard session={session} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
