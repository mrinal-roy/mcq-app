import {createStore} from 'redux'
import rootReducer from '../src/reducers/rootReducer'

const configureStore = () => {
    const initialState = {
        countOfQuestion: 1,
        usercorrect: 0,
        allquestions: [],
        started: false,
        totalquestions: 0
    }
    return createStore(rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
}

export default configureStore;