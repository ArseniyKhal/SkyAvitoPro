import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice'
import { useEffect } from 'react'

export function useAuth() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userSkyVito'))

    if (userData) {
      dispatch(
        setUser({
          email: userData.email,
          access: userData.access_token,
          refresh: userData.refresh_token,
        }),
      )
    }
  }, [dispatch])
  const { email, access, refresh } = useSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    access,
    refresh,
  }
}
