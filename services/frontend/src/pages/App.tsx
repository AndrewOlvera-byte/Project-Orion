import { Outlet } from react-router-dom
import Nav from ../components/Nav

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slateglass-800 to-slateglass-900">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>
    </div>
  )
}

