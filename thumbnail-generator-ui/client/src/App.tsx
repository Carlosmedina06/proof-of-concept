import { Routes, Route } from 'react-router-dom'

import Profile from './views/Profile/Profile'
import Home from './views/home/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Profile />} path="/profile" />
    </Routes>
  )
}

export default App
