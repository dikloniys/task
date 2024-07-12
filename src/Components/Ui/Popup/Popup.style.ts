import styled, { css } from "styled-components";
import { baseTheme } from "../../../Style/baseTheme";

export const PopupContainer = styled.div`  
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    padding: ${baseTheme.SizesCard.margin1};
`;
export const PopupBlur = styled.div` 
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
`;
export const PopupWrapper = styled.div` 
    background-color: ${baseTheme.Colors.white};
    border-radius: 20px;
    width: 100%;
    padding: ${baseTheme.SizesCard.margin1};
    z-index: 1;
    margin-bottom: ${baseTheme.SizesCard.margin3};
`;
export const Title = styled.div` 
    text-align: center;
    font-size: ${baseTheme.SizesCard.text1};
    margin-bottom: ${baseTheme.SizesCard.margin1};
`;
export const Img = styled.img` 
    width: ${baseTheme.SizesCard.logoSize};
    position: relative;
    right: calc(-50% + (${baseTheme.SizesCard.logoSize} / 2)) ;
`;
export const Close = styled.div` 
    position: fixed;
    bottom: ${baseTheme.SizesCard.margin1};
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: ${baseTheme.SizesCard.iconSize};
    width: ${baseTheme.SizesCard.iconSize};
    background-color: ${baseTheme.Colors.white};
    & svg{
        transform: scale(0.8);
    }
`;
export const Button = styled.div` 
    background-color: ${baseTheme.Colors.blue};
    color: ${baseTheme.Colors.white};
    width: 100%;
    height: ${baseTheme.SizesCard.iconSize};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
