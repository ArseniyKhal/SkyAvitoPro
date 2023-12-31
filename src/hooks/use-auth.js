import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'store/slices/authSlice'
import { useEffect } from 'react'

export function useAuth() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userSkyVito'))

    if (userData) {
      dispatch(
        setUser({
          email: userData.email,
          access: userData.access,
          refresh: userData.refresh,
        }),
      )
    }
  }, [dispatch])
  const { email, access, refresh } = useSelector((state) => state.auth)

  return {
    isAuth: !!email,
    email,
    access,
    refresh,
  }
}
