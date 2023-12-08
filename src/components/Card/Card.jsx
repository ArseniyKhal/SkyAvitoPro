import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { ModalWindow } from 'components/ModalWindow/ModalWindow'
// import { WorkoutSelectionWindow } from 'pages/profile-page/Profile'
import * as S from './Card.styles'

export const Card = () =>
  // { id, name, typeMain }
  {
    //   const [isOpenModalWindow, setOpenModalWindow] = useState(false)
    //   const toggleModalWindow = () => {
    //     setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow)
    //   }

    return (
      <S.Card>
        <S.CardPicture>
          <Link to={`/course/`}>
            <S.CardImg src={`/img/1.png`}></S.CardImg>
          </Link>
        </S.CardPicture>
        <S.CardContent>
          <S.CardLink>
            <Link to={`/course/`}>
              Ракетка для большого тенниса Triumph Pro ST Б/У
            </Link>
          </S.CardLink>
          <S.CardPrice>2 200 ₽</S.CardPrice>
          <S.CardBlock>
            <S.CardLocation>Санкт Петербург</S.CardLocation>
            <S.CardData>Сегодня в 10:45</S.CardData>
          </S.CardBlock>
        </S.CardContent>
      </S.Card>

      // <S.Card style={{ transform: typeMain ? '' : 'none' }}>
      //   <S.CardImg src={`/img/${id}.png`}></S.CardImg>
      //   {typeMain ? (
      //     <Link to={`/course/${id}`}>
      //       <S.CardLink>{name}</S.CardLink>
      //     </Link>
      //   ) : (
      //     <>
      //       <S.CardLink style={{ cursor: 'auto' }}>{name}</S.CardLink>
      //       <S.RedirectButton onClick={toggleModalWindow}>
      //         Перейти →
      //       </S.RedirectButton>
      //       {isOpenModalWindow && (
      //         <>
      //           <ModalWindow
      //             setOpenModalWindow={toggleModalWindow}
      //             childComponent={<WorkoutSelectionWindow idCourse={id} />}
      //           />
      //         </>
      //       )}
      //     </>
      //   )}
      // </S.Card>
    )
  }
