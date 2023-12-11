import { Header } from 'components/Header/header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import * as S from './Profile.styles'

export const Profile = () => {
  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      <S.Title>Здравствуйте, Антон!</S.Title>
      {/* блок Настройки профиля */}
      <S.ProfileSettings>
        <S.SubTitle>Настройки профиля</S.SubTitle>
        <S.ProfileSettingsContent>
          <S.BlockAvatar>
            <S.AvatarPicture>
              <S.AvatarImg src="/img/user.png"></S.AvatarImg>
            </S.AvatarPicture>
            <S.AvatarСhangeBtn>Заменить</S.AvatarСhangeBtn>
          </S.BlockAvatar>
          <S.BlockSettings>
            <S.InputsBlock>
              <S.Label htmlFor="name">Имя</S.Label>
              <S.ProfileSettingsInput
                type="text"
                name="name"
                id="name"
                //   placeholder="введите имя"
                //   value={repPass}
                //   onChange={(e) => setRepPass(e.target.value)}
              />
            </S.InputsBlock>
            <S.InputsBlock>
              <S.Label htmlFor="surname">Фамилия</S.Label>
              <S.ProfileSettingsInput
                type="text"
                name="surname"
                id="surname"
                //   placeholder="введите фамилию"
                //   value={repPass}
                //   onChange={(e) => setRepPass(e.target.value)}
              />
            </S.InputsBlock>
            <S.InputsBlock>
              <S.Label htmlFor="city">Город</S.Label>
              <S.ProfileSettingsInput
                type="text"
                name="city"
                id="city"
                //   placeholder="введите фамилию"
                //   value={repPass}
                //   onChange={(e) => setRepPass(e.target.value)}
              />
            </S.InputsBlock>
            <S.InputsBlockTel>
              <S.Label htmlFor="city">Телефон</S.Label>
              <S.ProfileSettingsInput
                type="tel"
                name="tel"
                id="tel"
                //   placeholder="введите Телефон"
                //   value={repPass}
                //   onChange={(e) => setRepPass(e.target.value)}
              />
            </S.InputsBlockTel>
            <S.EnterButton onClick={() => console.log('тык')}>
              Сохранить
            </S.EnterButton>
          </S.BlockSettings>
        </S.ProfileSettingsContent>
      </S.ProfileSettings>
      {/* Блок Мои товары */}
      <S.UsersProducts>
        <S.SubTitle>Мои товары</S.SubTitle>
        <S.MainList>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </S.MainList>
      </S.UsersProducts>

      {/* <DarkBG>
					
			  <S.TitleBlock>
				 <S.TitleBlockContent>
					<S.TitleBlockTitle>
					  Онлайн-тренировки для занятий дома
					</S.TitleBlockTitle>
					<S.TitleBlockSlogan>
					  Начните заниматься спортом и улучшите качество жизни
					</S.TitleBlockSlogan>
				 </S.TitleBlockContent>
				 <S.SaleSticker>
					<img src="/img/sale-sticker.png"></img>
					<S.SaleStickerText>
					  Измени своё <br /> тело за полгода
					</S.SaleStickerText>
				 </S.SaleSticker>
			  </S.TitleBlock>
			  {error && <S.BlockError>{error}</S.BlockError>}
			  			  )}
			 </DarkBG> */}
    </>
  )
}
