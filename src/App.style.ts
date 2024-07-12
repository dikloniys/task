import styled, { css } from "styled-components";
import { baseTheme } from "./Style/baseTheme";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${baseTheme.SizesCard.margin1};
`;

export const Img = styled.div`
  position: fixed;
  top: calc( 50% - (${baseTheme.Sizes.img_large}/2));
  bottom: 0;
  right: 0;
  left: calc( 50% - (${baseTheme.Sizes.img_large}/2));
`;
export const Logo = styled.img`
  width: ${baseTheme.Sizes.img_large};
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${baseTheme.SizesCard.margin1};
  margin-bottom: ${baseTheme.SizesCard.margin1};
`;
export const Absent = styled.div` 
  color: ${baseTheme.Colors.black};
  font-size: ${baseTheme.Sizes.text2};
`;