import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose
} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { bookingReducer } from "./Reducers/bookingReducer";

const reducer = combineReducers({
    bookingReducer: bookingReducer
});

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);
