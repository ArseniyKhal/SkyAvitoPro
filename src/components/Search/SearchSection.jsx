import { Link } from 'react-router-dom'
// import { useState } from 'react'
import * as S from './Search.styles'

export const SearchSection = () => {
  return (
    <S.SearchSection>
      <S.Logo>
        <svg
          width="54"
          height="38"
          viewBox="0 0 54 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.89126 36.6721C2.88089 38.9885 0 37.0581 0 33.6245C0 29.9693 0 19.0017 0 19.0017C0 19.0017 0 8.03413 0 4.37888C0 0.945258 2.8791 -0.985148 6.89126 1.33134C13.1373 4.93834 31.8738 15.7629 31.8738 15.7629C34.3651 17.2018 34.3651 20.7998 31.8738 22.2387C31.8738 22.2405 13.1373 33.0651 6.89126 36.6721Z"
            fill="#00C1FF"
          />
          <path
            d="M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z"
            fill="#BCEC30"
          />
          <mask
            id="mask0_7_86"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="20"
            y="0"
            width="34"
            height="38"
          >
            <path
              d="M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z"
              fill="#6FE4FF"
            />
          </mask>
          <g mask="url(#mask0_7_86)">
            <g filter="url(#filter0_f_7_86)">
              <path
                d="M6.89223 36.672C2.88186 38.9885 0.000976562 37.0581 0.000976562 33.6245C0.000976562 29.9692 0.000976562 19.0016 0.000976562 19.0016C0.000976562 19.0016 0.000976562 8.03407 0.000976562 4.37882C0.000976562 0.945197 2.88008 -0.985209 6.89223 1.33128C13.1383 4.93827 31.8748 15.7628 31.8748 15.7628C34.3661 17.2017 34.3661 20.7998 31.8748 22.2386C31.8748 22.2404 13.1383 33.065 6.89223 36.672Z"
                fill="#99D100"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_86"
              x="-8.92848"
              y="-8.61048"
              width="51.6011"
              height="55.2242"
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
                result="effect1_foregroundBlur_7_86"
              />
            </filter>
          </defs>
        </svg>
      </S.Logo>
      <S.SearchText
        // value={searchText}
        // onChange={(event) => {
        //   setSearchText(event.target.value)
        // }}
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
      />
      <S.EnterButton onClick={() => console.log('ищем...')}>
        Найти
      </S.EnterButton>
    </S.SearchSection>
  )
}