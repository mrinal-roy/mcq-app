const quizReducer = (state = {
    countOfQuestion: 1,  //yes
    // correct_ans: '',
    // incorrect_ans: '',
    // allchoices: '',
    userchoice: '',  //yes
    usercorrect: 0,  //yes
    // score: 0,
    alloptions: [],  //yes
}, action) => {
    switch(action.type) {
        case 'SET_OPTIONS':
            return Object.assign({}, state, {correct_ans: action.payload.correct, 
                incorrect_ans: action.payload.incorrect})
        
        case 'SHUFFLE_OPTIONS':
            return Object.assign({}, state, {alloptions: action.payload.options_arg})
                
        case 'CAPTURE_USER_ANSWER':
            return Object.assign({}, state, {userchoice: action.payload})
        
        case 'CHECK_USER_ANSWER':
            return Object.assign({}, state, {usercorrect: action.payload})
        
        case 'NEXT_QUESTION_TRACK':
            return Object.assign({}, state, {countOfQuestion: action.payload+1})
            
        default: return state
    }
};

export default quizReducer