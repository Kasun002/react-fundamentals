import { ThemeProvider } from "@emotion/react";
import Pokemon from "./app/Pokemon";
import theme from "./utils/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const AppPokemon = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Pokemon />
            </ThemeProvider>
        </Provider>
    )
}

export default AppPokemon;