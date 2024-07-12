import React from "react";
import { observer } from "mobx-react-lite";
import * as styled from "./App.style";
import { GlobalStyle } from "./Style/theme";
import { Main } from "./Components/Pages/Main";
import { StoreProvider } from "./Store/CardsStore";

export const App = observer(() => (
    <StoreProvider>
        <GlobalStyle />
        <Main />
    </StoreProvider>
));
