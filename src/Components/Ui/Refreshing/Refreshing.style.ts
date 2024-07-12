import styled, { css, keyframes } from "styled-components";
import { baseTheme } from "../../../Style/baseTheme";

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const RefreshingWrapper = styled.div`
    width: 10vw;
    height: 10vw;
    background-color: ${baseTheme.Colors.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    right: calc(50% - 5vw);
    box-shadow: 1px 1px 1px 1px #efefef;
`;

export const Refreshing = styled.div`
  border: 4px solid ${baseTheme.Colors.white}; 
  border-top: 4px solid ${baseTheme.Colors.blue}; 
  border-right: 4px solid ${baseTheme.Colors.blue}; 
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  animation: ${rotate} 2s linear infinite;
`;
