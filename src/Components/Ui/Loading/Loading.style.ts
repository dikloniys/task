import styled, { css, keyframes } from "styled-components";
import { baseTheme } from "../../../Style/baseTheme";

export const LoadingWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  border: 4px solid ${baseTheme.Colors.lightGrey}; 
  border-top: 4px solid ${baseTheme.Colors.black}; 
  border-radius: 50%;
  width: ${baseTheme.Sizes.sizePreloader};
  height: ${baseTheme.Sizes.sizePreloader};
  animation: ${rotate} 2s linear infinite;
`;

export const LoadingTitle = styled.div` 
    color: ${baseTheme.Colors.black};
    font-size: ${baseTheme.Sizes.text2};
`;
