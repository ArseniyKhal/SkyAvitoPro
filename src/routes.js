import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Main } from 'pages/MainPage/Main'
import { Profile } from 'pages/ProfilePage/Profile'
import { Auth } from 'pages/AuthPage/Auth'
import { NotFound } from 'pages/NotFoundPage/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Main />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
