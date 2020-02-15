import {combineReducers} from 'redux';
import quizReducer from './quizReducer';
import setquestionsReducer from './setquestionsReducer';

export default combineReducers({
    quizReducer,
    setquestionsReducer
})