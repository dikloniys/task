import styled, { css } from "styled-components";
import { baseTheme } from "../../../Style/baseTheme";

export const CardWrapper = styled.div<{ cardbackgroundcolor: string }>`
    background-color: ${baseTheme.Colors.white};
    border-radius: 20px;
    width: 100%;
    padding: ${baseTheme.SizesCard.margin1};
    ${(props) => props.cardbackgroundcolor && css`
        background-color: ${props.cardbackgroundcolor};
    `};
    box-shadow: 1px 1px 1px 1px #efefef;
`;
export const TitleWrapper = styled.div` 
    border-bottom: 1px solid #E9E9E9;
    margin-bottom: ${baseTheme.SizesCard.margin1};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Title = styled.div <{ highlighttextcolor: string }>` 
    font-size: ${baseTheme.SizesCard.text1};
    ${(props) => !!props.highlighttextcolor && css`
        color: ${props.highlighttextcolor};
    `};
`;
export const Img = styled.div` 
    margin-bottom: ${baseTheme.SizesCard.margin2};
`;
export const Logo = styled.img` 
    width: ${baseTheme.SizesCard.logoSize};
    border-radius: 50%;
`;
export const BonusWrapper = styled.div` 
    margin-bottom: ${baseTheme.SizesCard.margin2};
`;
export const TextBonusWrapper = styled.div` 
    margin-bottom: ${baseTheme.SizesCard.margin1};
    display: flex;
    align-items: baseline;
    gap: ${baseTheme.SizesCard.text2};
`;
export const BonusNum = styled.div <{ highlighttextcolor: string }>` 
    font-size: ${baseTheme.SizesCard.text0};
    ${(props) => props.highlighttextcolor && css`
        color: ${props.highlighttextcolor};
    `};
`;
export const BonusTitle = styled.div<{ textcolor: string }>` 
    font-size: ${baseTheme.SizesCard.text2};
    color: ${baseTheme.Colors.lightGrey};
    ${(props) => props.textcolor && css`
        color: ${props.textcolor};
    `};
`;
export const TextBonusDescription = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
    grid-column-gap: ${baseTheme.SizesCard.margin3};
    grid-row-gap: ${baseTheme.SizesCard.margin2};
    border-bottom: 1px solid #E9E9E9;
    padding-bottom: ${baseTheme.SizesCard.margin2};
`;
export const BonusSubtitle = styled.div<{ textcolor: string }>` 
    font-size: ${baseTheme.SizesCard.text3};
    color: ${baseTheme.Colors.lightGrey};
    ${(props) => props.textcolor && css`
        color: ${props.textcolor};
    `};
`;
export const CashBack = styled.div` 
    font-size: ${baseTheme.SizesCard.description_text2};
`;
export const Level = styled.div` 
    font-size: ${baseTheme.SizesCard.description_text2};
`;
export const ButtonWrapper = styled.div` 
    display: flex;
    gap: ${baseTheme.SizesCard.margin3};
`;

export const ButtonImgEye = styled.div<{ maincolor:string }>`
    ${(props) => props.maincolor && css`
        & svg{
            width: ${baseTheme.SizesCard.iconSize};
            height: ${baseTheme.SizesCard.iconSize};
            fill: ${props.maincolor};
        }
    `};
`;


export const ButtonImgTrash = styled.div<{ accentcolor: string }>`
    ${(props) => props.accentcolor && css`
        & svg{
            width: ${baseTheme.SizesCard.iconSize};
            height: ${baseTheme.SizesCard.iconSize};
        }
        & path{
            stroke: ${props.accentcolor};
        }
    `};
`;

export const Button = styled.div<{ backgroundcolor: string, maincolor:string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    color: ${baseTheme.Colors.blue};
    font-size: ${baseTheme.SizesCard.text2}; 
    background-color: ${baseTheme.Colors.lightGrey};
    ${(props) => props.backgroundcolor && css`
        background-color: ${props.backgroundcolor};
    `};
    ${(props) => props.maincolor && css`
        color: ${props.maincolor};
    `};
`;
