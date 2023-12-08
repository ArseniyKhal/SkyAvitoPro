import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Main } from 'pages/MainPage/Main'
import { Profile } from 'pages/ProfilePage/Profile'
import { Auth } from 'pages/AuthPage/Auth'
import { NotFound } from 'pages/NotFoundPage/NotFound'
import { Adv } from 'pages/AdvPage/Adv'
import { SellerProfile } from 'pages/SellerProfilePage/SellerProfile'

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
      <Route
        path="adv/"
        element={
          <ProtectedRoute>
            <Adv />
          </ProtectedRoute>
        }
      />
      <Route
        path="seller/"
        element={
          <ProtectedRoute>
            <SellerProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
