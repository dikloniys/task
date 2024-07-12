import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./baseTheme";
import Regularttf from "../Assets/Fonts/SegoeUIRegular/SegoeUIRegular.ttf";
import Regulareot from "../Assets/Fonts/SegoeUIRegular/SegoeUIRegular.eot";
import Regularwoff from "../Assets/Fonts/SegoeUIRegular/SegoeUIRegular.woff";
import Boldttf from "../Assets/Fonts/SegoeUIBold/SegoeUIBold.ttf";
import Boldeot from "../Assets/Fonts/SegoeUIBold/SegoeUIBold.eot";
import Boldwoff from "../Assets/Fonts/SegoeUIBold/SegoeUIBold.woff";


export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SegoeUIBold';
  src: url(${Regularttf}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'SegoeUIRegular';
  src: url(${Regulareot}) format('embedded-opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'SegoeUIRegular';
  src: url(${Regularwoff}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'SegoeUIRegular';
  src: url(${Boldttf}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'SegoeUIRegular';
  src: url(${Boldeot}) format('embedded-opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'SegoeUIRegular';
  src: url(${Boldwoff}) format('woff');
  font-weight: 400;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'SegoeUIBold';
    font-weight: 500;
    color: ${baseTheme.Colors.black};
  }
  body{
    padding: 0;
    margin: 0;
    background-color: ${baseTheme.Colors.lightGrey};
    height: 100vh ;
  }
`
