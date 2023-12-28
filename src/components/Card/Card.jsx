import { Link } from 'react-router-dom'
import { formatDateToDistance } from 'helpers/helpers'
import * as S from './Card.styles'

export const Card = ({ dataCard }) => {
  return (
    <S.Card>
      <S.CardPicture>
        <Link to={`/adv/${dataCard.id}`}>
          <S.CardImg
            src={
              dataCard?.images[0]?.url
                ? `http://localhost:8090/${dataCard?.images[0]?.url}`
                : '/img/noImage.jpg'
            }
            alt="fotoAvd"
          ></S.CardImg>
        </Link>
      </S.CardPicture>
      <S.CardContent>
        <S.CardLink>
          <Link to={`/adv/${dataCard.id}`}>{dataCard?.title}</Link>
        </S.CardLink>
        <S.CardPrice>{dataCard?.price.toLocaleString()} ₽</S.CardPrice>
        <S.CardBlock>
          <S.CardLocation>{dataCard?.user.city}</S.CardLocation>
          <S.CardData>{formatDateToDistance(dataCard?.created_on)}</S.CardData>
        </S.CardBlock>
      </S.CardContent>
    </S.Card>
  )
}
