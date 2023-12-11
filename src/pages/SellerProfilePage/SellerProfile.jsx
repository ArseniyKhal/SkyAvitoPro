import { Header } from 'components/Header/header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import * as S from '../ProfilePage/Profile.styles'

export const SellerProfile = () => {
  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      <S.Title>Профиль продавца</S.Title>

      <S.ProfileSettings>
        <S.SubTitle>Настройки профиля</S.SubTitle>
        <S.ProfileSettingsContent>
          <S.BlockAvatar>
            <S.AvatarPicture>
              <S.AvatarImg src="/img/user.png" alt="avatarImg"></S.AvatarImg>
            </S.AvatarPicture>
          </S.BlockAvatar>
          <S.BlokInfo>
            <S.SellerName>Кирилл Матвеев</S.SellerName>
            <S.SellerLocation>Санкт Петербург</S.SellerLocation>
            <S.SellerLocation>Продает товары с августа 2021</S.SellerLocation>
            <S.TelButton>
              <span>Показать телефон</span>8 905 ХХХ ХХ ХХ
            </S.TelButton>
          </S.BlokInfo>
        </S.ProfileSettingsContent>
      </S.ProfileSettings>

      <S.UsersProducts>
        <S.SubTitle>Товары продавца</S.SubTitle>
        <S.MainList>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </S.MainList>
      </S.UsersProducts>
    </>
  )
}
