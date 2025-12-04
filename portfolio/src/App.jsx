import { Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Nav from './components/nav'
import Loading from './components/Loading'
import './App.css'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div id="all">
      {loading && <Loading />}
      <Nav />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
