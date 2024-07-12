import React from "react";
import * as styled from "./Card.style";
import { ICardProps } from "../../../Statiс/interface";
import { ReactComponent as Eye } from "../../../Assets/Img/svg/eye.svg";
import { ReactComponent as Trash } from "../../../Assets/Img/svg/trash.svg";

export const Card: React.FC<ICardProps> = ({ data, handleOpenPopup }) => {
    const {
        cardBackgroundColor, backgroundColor, highlightTextColor, textColor, accentColor, mainColor
    } = data.mobileAppDashboard;

    const handleClick = (text: string) => {
        handleOpenPopup(`нажата кнопка ${text}, ид компании: ${data?.company?.companyId}`,"card");
    };
    return (
        <styled.CardWrapper cardbackgroundcolor={cardBackgroundColor}>
            <styled.TitleWrapper>
                <styled.Title highlighttextcolor={highlightTextColor}>
                    {data?.mobileAppDashboard.companyName}
                </styled.Title>
                <styled.Img>
                    <styled.Logo src={data?.mobileAppDashboard.logo} alt="Logo" />
                </styled.Img>
            </styled.TitleWrapper>
            <styled.BonusWrapper>
                <styled.TextBonusWrapper>
                    <styled.BonusNum highlighttextcolor={highlightTextColor}>
                        {data?.customerMarkParameters?.loyaltyLevel?.cashToMark}
                    </styled.BonusNum>
                    <styled.BonusTitle textcolor={textColor}>
                        баллов
                    </styled.BonusTitle>
                </styled.TextBonusWrapper>
                <styled.TextBonusDescription>
                    <styled.BonusSubtitle textcolor={textColor}>
                        Кешбэк
                    </styled.BonusSubtitle>
                    <styled.BonusSubtitle textcolor={textColor}>
                        Уровень
                    </styled.BonusSubtitle>
                    <styled.CashBack>
                        {data?.customerMarkParameters?.loyaltyLevel?.number}
                        %
                    </styled.CashBack>
                    <styled.Level>
                        {data?.customerMarkParameters?.loyaltyLevel?.name}
                    </styled.Level>
                </styled.TextBonusDescription>
            </styled.BonusWrapper>
            <styled.ButtonWrapper>
                <styled.ButtonImgEye maincolor={mainColor} onClick={() => handleClick("Показать")}>
                    <Eye />
                </styled.ButtonImgEye>
                <styled.ButtonImgTrash accentcolor={accentColor} onClick={() => handleClick("Удалить")}>
                    <Trash />
                </styled.ButtonImgTrash>
                <styled.Button backgroundcolor={backgroundColor} maincolor={mainColor} onClick={() => handleClick("Подробнее")}>
                    Подробнее
                </styled.Button>
            </styled.ButtonWrapper>
        </styled.CardWrapper>

    );
};
