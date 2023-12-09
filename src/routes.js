import { Routes, Route, useLocation } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Main } from 'pages/MainPage/Main'
import { Profile } from 'pages/ProfilePage/Profile'
import { Auth } from 'pages/AuthPage/Auth'
import { NotFound } from 'pages/NotFoundPage/NotFound'
import { Adv } from 'pages/AdvPage/Adv'
import { SellerProfile } from 'pages/SellerProfilePage/SellerProfile'
import { Modal } from 'components/ModalWindow/Modal'
import { FormAuth } from 'components/FormAuth/FormAuth'

export const AppRoutes = () => {
  const location = useLocation()
  const background = location.state && location.state.background
  return (
    <>
      <Routes location={background || location}>
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />}>
          <Route path="/modal" element={<Modal />} />
          <Route path="/auth" element={<Auth typeLogin={true} />} />
          <Route path="/registration" element={<Auth typeLogin={false} />} />
        </Route>
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
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  )
}
