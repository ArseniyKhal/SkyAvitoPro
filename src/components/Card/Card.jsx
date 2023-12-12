import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { ModalWindow } from 'components/ModalWindow/ModalWindow'
// import { WorkoutSelectionWindow } from 'pages/profile-page/Profile'
import { formateDate } from 'helpers/helpers'
import * as S from './Card.styles'

export const Card = ({ dataCard }) => {
  //   const [isOpenModalWindow, setOpenModalWindow] = useState(false)
  //   const toggleModalWindow = () => {
  //     setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow)
  //   }
  //   console.log(dataCard.user.phone)
  //   console.log(dataCard)
  const image = dataCard.images[0]?.url
  return (
    <S.Card>
      <S.CardPicture>
        <Link to={`/adv/${dataCard.id}`}>
          <S.CardImg
            src={image ? `http://localhost:8090/${image}` : '/img/noImage.jpg'}
            alt="fotoAvd"
          ></S.CardImg>
        </Link>
      </S.CardPicture>
      <S.CardContent>
        <S.CardLink>
          <Link to={`/adv/${dataCard.id}`}>{dataCard?.title}</Link>
        </S.CardLink>
        <S.CardPrice>{dataCard?.price} ₽</S.CardPrice>
        <S.CardBlock>
          <S.CardLocation>{dataCard?.user.city}</S.CardLocation>
          <S.CardData>{formateDate(dataCard?.created_on)}</S.CardData>
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
