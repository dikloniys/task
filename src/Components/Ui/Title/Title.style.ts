import styled, { css } from "styled-components";
import { baseTheme } from "../../../Style/baseTheme";

export const Title = styled.div` 
    background-color: ${baseTheme.Colors.white};
    display: flex;
    justify-content: center;
    margin-bottom: ${baseTheme.Sizes.margin1};
`;

export const Text = styled.div` 
    margin-top: ${baseTheme.Sizes.margin1};
    margin-bottom: ${baseTheme.Sizes.margin1};
    font-size: ${baseTheme.Sizes.text1};
    color: ${baseTheme.Colors.blue};
`;
