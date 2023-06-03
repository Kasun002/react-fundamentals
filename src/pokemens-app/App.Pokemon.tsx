import { ThemeProvider } from "@emotion/react"
import theme from "./utils/theme";
import Pokemon from "./app/Pokemon";

const AppPokemon = () => {
    return (
        <ThemeProvider theme={theme}>
            <Pokemon />
        </ThemeProvider>
    )
}

export default AppPokemon;