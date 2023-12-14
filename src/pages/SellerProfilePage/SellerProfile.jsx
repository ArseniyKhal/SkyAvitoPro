import { Header } from 'components/Header/header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'App.styles'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { TelButton } from 'components/TelButton/TelButton'
import { formateDate } from 'helpers/helpers'
import * as S from '../SellerProfilePage/SellerProfile.styles'

export const SellerProfile = () => {
  const { selID } = useParams()
  const { data: advData, isLoading } = useGetAllAdvsQuery()

  const selerData = advData?.filter((item) => {
    return item.id === +selID
  })[0].user

  const selerAdvs = advData?.filter((item) => {
    return item.user_id === +selID
  })

  // формируем список объявлений продавана
  const mapSelerAdvsList = selerAdvs?.map((advCard) => {
    return <Card key={advCard.id} dataCard={advCard}></Card>
  })

  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      <S.Title>Профиль продавца</S.Title>
      {isLoading ? (
        <Loader2></Loader2>
      ) : (
        <>
          <S.ProfileSettings>
            <S.SubTitle>Настройки профиля</S.SubTitle>
            <S.ProfileSettingsContent>
              <S.AvatarPicture>
                <S.AvatarImg
                  src={
                    selerData.avatar
                      ? `http://localhost:8090/${selerData.avatar}`
                      : '/img/userLogo.jpg'
                  }
                  alt="avatarSeller"
                ></S.AvatarImg>
              </S.AvatarPicture>
              <S.BlockInfo>
                <S.InfoText>
                  <S.SellerName>{selerData.name}</S.SellerName>
                  <S.SellerLocation>{selerData.city}</S.SellerLocation>
                  <S.SellerLocation>
                    Продает товары {formateDate(selerData.sells_from)}
                  </S.SellerLocation>
                </S.InfoText>
                <TelButton TelNamber={selerData.phone}></TelButton>
              </S.BlockInfo>
            </S.ProfileSettingsContent>
          </S.ProfileSettings>
          <S.SellerProducts>
            <S.SubTitle>Товары продавца</S.SubTitle>
            <S.MainList>{mapSelerAdvsList}</S.MainList>
          </S.SellerProducts>
        </>
      )}
    </>
  )
}
