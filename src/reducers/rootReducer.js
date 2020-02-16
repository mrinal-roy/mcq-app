import {combineReducers} from 'redux';
import quizReducer from './quizReducer';
import setquestionsReducer from './setquestionsReducer';

const rootReducer = combineReducers({
    setquestionsReducer,
    quizReducer
});

export default rootReducer;