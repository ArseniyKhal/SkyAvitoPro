import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectPath = '/auth' }) => {
  //   const userData = JSON.parse(localStorage.getItem('userSkyFitnesPro'))
  const userData = true
  if (!userData) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
