const quizReducer = (state = {
    countOfQuestion: 1,
    userchoice: '',
    usercorrect: 0,
    alloptions: [],
}, action) => {
    switch(action.type) {
        case 'SET_OPTIONS':
            return Object.assign({}, state, {correct_ans: action.payload.correct, 
                incorrect_ans: action.payload.incorrect})
        
        case 'SET_CURRENT_QUESTION':
            return Object.assign({}, state, {alloptions: action.payload.question_arg})

        case 'INCREASE_USER_SCORE':
            return Object.assign({}, state, {usercorrect: ++action.payload})
                
        case 'CAPTURE_USER_ANSWER':  //not required
            return Object.assign({}, state, {userchoice: action.payload})
        
        case 'NEXT_QUESTION_TRACK':
            return Object.assign({}, state, {countOfQuestion: action.payload})
            
        default: return state
    }
};

export default quizReducer