import { supabase } from '../lib/supabase'

// Temporary page to prove login works. Step 3 turns this into the real
// dashboard shell with a sidebar whose menu depends on the admin's role.
export default function Dashboard({ session }) {
  return (
    <div className="center-screen">
      <div className="card">
        <h1>You're signed in</h1>
        <p className="muted">Logged in as <strong>{session.user.email}</strong></p>
        <button className="btn-secondary" onClick={() => supabase.auth.signOut()}>
          Sign out
        </button>
      </div>
    </div>
  )
}
