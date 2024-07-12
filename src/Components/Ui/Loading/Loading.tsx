import React from "react";
import * as styled from "./Loading.style";

export const Loading = () => (
    <styled.LoadingWrapper>
        <styled.Loading />
        <styled.LoadingTitle>
            Подгрузка компаний
        </styled.LoadingTitle>
    </styled.LoadingWrapper>
);
