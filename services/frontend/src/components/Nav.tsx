import { Link } from react-router-dom

export default function Nav() {
  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Orion</Link>
        <div className="space-x-4 text-sm">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/account" className="hover:underline">Account</Link>
          <Link to="/tickets" className="hover:underline">Tickets</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  )
}

