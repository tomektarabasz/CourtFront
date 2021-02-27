import { createStore, Store, applyMiddleware } from "redux";
import { appReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = (): Store => {
    const store = createStore(appReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return(store)
};