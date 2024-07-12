import React from "react";
import * as styled from "./Popup.style";
import { ReactComponent as Close } from "../../../Assets/Img/svg/close.svg";
import  info  from "../../../Assets/Img/exclamation_white.png";

export const Popup = ({ buttonText, type, handleClosePopup }) => (
    <styled.PopupContainer>
        <styled.PopupWrapper>
            <styled.Title>
                {buttonText}
            </styled.Title>
            {type === "error" && <styled.Img src={info} alt="" />}
            <styled.Button onClick={handleClosePopup}>
                Хорошо
            </styled.Button>
        </styled.PopupWrapper>
        <styled.Close onClick={handleClosePopup}>
            <Close />
        </styled.Close>
        <styled.PopupBlur />
    </styled.PopupContainer>
);
