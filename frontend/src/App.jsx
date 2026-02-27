import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="browse" element={<BrowsePage />} />
      </Route>
    </Routes>
  )
}

export default App
