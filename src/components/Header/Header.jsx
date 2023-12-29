import { useState } from 'react'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'components/ModalWindow/Modal'
import { NewAdvert } from 'components/NewAdvert/NewAdvert'
import * as S from './Header.styles'

export const Header = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const [isModal, setModal] = useState(false)

  return (
    <>
      <S.HeaderSection>
        <S.HeaderContainer>
          <S.HeaderContent>
            <S.HeaderLogo onClick={() => navigate('/')}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="white" />
                <path
                  d="M8.55231 22.4652C7.06699 23.3231 6 22.6082 6 21.3364C6 19.9826 6 15.9206 6 15.9206C6 15.9206 6 11.8585 6 10.5047C6 9.23303 7.06633 8.51807 8.55231 9.37603C10.8657 10.7119 17.8051 14.721 17.8051 14.721C18.7278 15.254 18.7278 16.5866 17.8051 17.1195C17.8051 17.1201 10.8657 21.1292 8.55231 22.4652Z"
                  fill="#00C1FF"
                />
                <path
                  d="M16.1903 22.4641C14.7049 23.322 13.6379 22.6071 13.6379 21.3353C13.6379 19.9815 13.6379 15.9195 13.6379 15.9195C13.6379 15.9195 13.6379 11.8574 13.6379 10.5036C13.6379 9.23194 14.7043 8.51697 16.1903 9.37493C18.4527 10.6817 25.2398 14.6028 25.2398 14.6028C26.2532 15.188 26.2532 16.651 25.2398 17.2362C25.2392 17.2362 18.4527 21.1573 16.1903 22.4641Z"
                  fill="#BCEC30"
                />
                <mask
                  id="mask0_7_701"
                  // style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="13"
                  y="9"
                  width="14"
                  height="14"
                >
                  <path
                    d="M16.1905 22.4641C14.7052 23.322 13.6382 22.6071 13.6382 21.3353C13.6382 19.9815 13.6382 15.9195 13.6382 15.9195C13.6382 15.9195 13.6382 11.8574 13.6382 10.5036C13.6382 9.23194 14.7045 8.51697 16.1905 9.37493C18.4529 10.6817 25.2401 14.6028 25.2401 14.6028C26.2535 15.188 26.2535 16.651 25.2401 17.2362C25.2394 17.2362 18.4529 21.1573 16.1905 22.4641Z"
                    fill="#6FE4FF"
                  />
                </mask>
                <g mask="url(#mask0_7_701)">
                  <g filter="url(#filter0_f_7_701)">
                    <path
                      d="M8.5528 22.4653C7.06748 23.3232 6.00049 22.6083 6.00049 21.3366C6.00049 19.9828 6.00049 15.9207 6.00049 15.9207C6.00049 15.9207 6.00049 11.8587 6.00049 10.5049C6.00049 9.23316 7.06682 8.51819 8.5528 9.37615C10.8662 10.7121 17.8056 14.7212 17.8056 14.7212C18.7283 15.2541 18.7283 16.5867 17.8056 17.1196C17.8056 17.1203 10.8662 21.1294 8.5528 22.4653Z"
                      fill="#99D100"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_7_701"
                    x="-2.92896"
                    y="0.0717678"
                    width="30.356"
                    height="31.6979"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="4.46473"
                      result="effect1_foregroundBlur_7_701"
                    />
                  </filter>
                </defs>
              </svg>
            </S.HeaderLogo>
            {isAuth && (
              <S.EnterButton
                onClick={() =>
                  setModal(
                    <NewAdvert closeFunction={setModal} titleMod="Новое" />,
                  )
                }
              >
                Разместить объявление
              </S.EnterButton>
            )}
            <S.EnterButton
              onClick={() => navigate(`/${isAuth ? 'profile' : 'auth'}`)}
            >
              {isAuth ? 'Л' : 'Вход в л'}ичный кабинет
            </S.EnterButton>
          </S.HeaderContent>
        </S.HeaderContainer>
      </S.HeaderSection>
      {isModal && (
        <Modal
          childComponent={isModal}
          cross={true}
          closeFunction={setModal}
        ></Modal>
      )}
    </>
  )
}
