import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './components/layout/MainLayout'
import { ProfilePage } from './components/pages/ProfilePage'
import { StubPage } from './components/pages/StubPage'

function App() {
  return <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/home" element={<StubPage />} />
        <Route path="/liked" element={<StubPage />} />
        <Route path="/downloads" element={<StubPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<StubPage />} />
        {/* <Route path="*" element={<Navigate to="/profile" />} /> */}
      </Routes>
    </MainLayout>
  </BrowserRouter>
}

export default App
