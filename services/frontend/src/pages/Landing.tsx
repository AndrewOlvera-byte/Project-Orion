import { Link } from react-router-dom

export default function Landing() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-extrabold tracking-tight">Agentic Workflows at Scale</h1>
      <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
        Orion is a unified platform combining a robust Django core with scalable FastAPI microservices.
      </p>
      <div className="mt-8 space-x-4">
        <Link to="/register" className="px-5 py-2 rounded-md bg-white text-black font-medium">Get Started</Link>
        <Link to="/login" className="px-5 py-2 rounded-md border border-white/20">Sign In</Link>
      </div>
    </section>
  )
}

