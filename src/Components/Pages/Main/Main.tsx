import React, {
    useState, useEffect, useCallback, useContext
} from "react";
import axios, { AxiosResponse } from "axios";
import { observer } from "mobx-react-lite";
import PullToRefresh from "react-pull-to-refresh";
import * as styled from "./Main.style";
import LogoImage from "../../../Assets/Img/logo.png";
import { Loading } from "../../Ui/Loading";
import { Title } from "../../Ui/Title";
import { Card } from "../../Ui/Card";
import { Popup } from "../../Ui/Popup";
import { Refreshing } from "../../Ui/Refreshing";
import { StoreContext } from "../../../Store/CardsStore";
import { ICardProps } from "../../../Statiс/interface";
import { limit, url } from "../../../Statiс/constant";

export const Main = observer(() => {
    const [showLogo, setShowLogo] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState({ buttonText: "", type: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [offset, setOffset] = useState(0);
    const { setCards, cardsData } = useContext(StoreContext);

    const getAllCards = useCallback(async (currentOffset: number) => {
        setIsLoading(true);

        try {
            const response:AxiosResponse<ICardProps> = await axios.post(
                `${url}`,
                {
                    offset: currentOffset,
                    limit
                },
                {
                    headers: {
                        TOKEN: "123"
                    }
                }
            );
            const newCards = response.data.companies;
            if (newCards.length > 0) {
                setCards(newCards);
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    handleOpenPopup("Ошибка авторизации", "error");
                }
                else if (error.response.status === 400) {
                    handleOpenPopup(error.response.data.message, "error");
                }
                else if (error.response.status === 500) {
                    handleOpenPopup("Все упало", "error");
                }
            }
            else {
                handleOpenPopup("Произошла ошибка", "error");
            }
        }
        finally {
            setIsLoading(false);
        }
    }, [setCards]);

    const handleOpenPopup = useCallback((buttonText,type) => {
        setPopupData({ buttonText, type });
        setIsPopupOpen(true);
    }, []);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        window.location.reload();
    }, []);
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleScroll = useCallback(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if (scrollable === scrolled && !isLoading) {
            setOffset((prev) => {
                const newOffset = prev + limit;
                getAllCards(newOffset);
                return newOffset;
            });
        }
    }, [getAllCards, isLoading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            handleRefresh();
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        getAllCards(0);
    }, [getAllCards]);

    useEffect(() => {
        setTimeout(() => {
            setShowLogo(false);
        }, 3000);
    }, []);

    return (
        <>
            {!showLogo && <Title />}
            {refreshing && !showLogo && <Refreshing />}
            <PullToRefresh onRefresh={handleRefresh}>
                <styled.Main>
                    {showLogo
                        ? (
                            <styled.Img>
                                <styled.Logo src={LogoImage} alt="Logo" />
                            </styled.Img>
                        )
                        : (
                            <>
                                {cardsData.length > 0
                                    ? (
                                        <styled.Cards>
                                            {cardsData.map((item, index) => (
                                                <Card
                                                    key={`${index}-Card`}
                                                    data={item}
                                                    handleOpenPopup={handleOpenPopup}
                                                    companies={[]}
                                                />
                                            ))}
                                        </styled.Cards>
                                    )
                                    : (
                                        !isLoading && <styled.Absent>Нет компаний</styled.Absent>
                                    )}
                                {isLoading &&
                                <Loading />}
                                {isPopupOpen && (
                                    <Popup
                                        type={popupData.type}
                                        buttonText={popupData.buttonText}
                                        handleClosePopup={handleClosePopup}
                                    />
                                )}
                            </>
                        )}
                </styled.Main>
            </PullToRefresh>
        </>
    );
});
