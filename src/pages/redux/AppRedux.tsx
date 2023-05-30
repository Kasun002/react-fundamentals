import { Provider } from "react-redux";
import { store } from "./store/store";
import ReduxProductList from "./components/reduxProductList";

const AppRedux = () => {
    return (
        <Provider store={store}>
            <ReduxProductList></ReduxProductList>
        </Provider>
    );
}

export default AppRedux;
