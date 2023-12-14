// import { Link } from 'react-router-dom'
// import { useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { removeUser } from 'store/slices/userSlice'
// import { useAuth } from 'hooks/use-auth'
// import { useDropdownClose } from 'hooks/use-dropdown-close'
// import { signOutUser } from 'api'
import { useNavigate } from 'react-router'
import * as S from './header.styles'

export const Header = () => {
  //   const dispatch = useDispatch()
  const navigate = useNavigate()
  //   const { isAuth, email } = useAuth()
  //   const [isProfileMenu, setProfileMenu] = useState(false)
  let isAuth = false

  //   const node = useRef()
  //   useDropdownClose(node, () => {
  //     if (isProfileMenu) {
  //       setProfileMenu(false)
  //     }
  //   })
  return (
    //  <S.Header ref={node}>
    <>
      <S.HeaderSection>
        <S.HeaderContainer>
          <S.HeaderContent>
            {!isAuth && (
              //   <Link to={'/modal'} state={{ background: location }}>
              <S.EnterButton onClick={() => navigate('/auth')}>
                {/* <S.EnterButtonSecondLine> */}
                Вход в личный кабинет
              </S.EnterButton>
              //   </Link>
            )}
            {isAuth && (
              <>
                <S.EnterButton
                  onClick={() => console.log('окно размещения объявления')}
                >
                  Разместить объявление
                </S.EnterButton>
                <S.EnterButton
                  onClick={() => console.log('переход в Личный кабинет')}
                >
                  Личный кабинет
                </S.EnterButton>
              </>
            )}

            {/* {isAuth ? (
        <S.HeaderFlex onClick={() => setProfileMenu((prev) => !prev)}>
          <S.HeaderUserLogo>
            <S.HeaderUserImg src="/img/userLogo.jpg"></S.HeaderUserImg>
          </S.HeaderUserLogo>
          <S.HeaderName style={{ color: colorTextBlack ? '' : '#FFF' }}>
            {email}
          </S.HeaderName>
          <S.HeaderButton className="_btn">
                      </S.HeaderButton>
          <S.Dropdown ref={node}>
            <S.DropdownMenu open={isProfileMenu}>
              <Link to={`/profile`}>
                <S.DropdownMenuItem
                  style={{ color: colorTextBlack ? '' : '#FFF' }}
                >
                  Мой профиль
                </S.DropdownMenuItem>
              </Link>
              <S.DropdownMenuItem
                onClick={() => {
                  signOutUser()
                  navigate('/')
                  localStorage.removeItem('userSkyFitnesPro')
                  dispatch(removeUser())
                }}
                style={{ color: colorTextBlack ? '' : '#FFF' }}
              >
                Выйти
              </S.DropdownMenuItem>
            </S.DropdownMenu>
          </S.Dropdown>
        </S.HeaderFlex>
      ) : (
        <S.EnterButton onClick={() => navigate('/login')}>Войти</S.EnterButton>
      )} */}
          </S.HeaderContent>
        </S.HeaderContainer>
      </S.HeaderSection>
    </>
  )
}
