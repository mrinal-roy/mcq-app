const quizReducer = (state = {
    countOfQuestion: 1,
    usercorrect: 0,
}, action) => {
    switch(action.type) {
        case 'SET_OPTIONS':
            return Object.assign({}, state, {correct_ans: action.payload.correct, 
                incorrect_ans: action.payload.incorrect})

        case 'INCREASE_USER_SCORE':
            return Object.assign({}, state, {usercorrect: ++action.payload})
        
        case 'NEXT_QUESTION_TRACK':
            return Object.assign({}, state, {countOfQuestion: action.payload})
            
        default: return state
    }
};

export default quizReducer