import {createStore} from 'redux'
import rootReducer from '../src/reducers/rootReducer'

const configureStore = () => {
    const initialState = {
        countOfQuestion: 0,
        question: '',
        correct_ans: '',
        incorrect_ans: '',
        allchoices: '',
        userchoice: '',
        usercorrect: 0,
        score: 0,
        allquestions: [],
        alloptions: [],
        started: false,
        totalquestions: 0
    }
    return createStore(rootReducer, 
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
}

export default configureStore;