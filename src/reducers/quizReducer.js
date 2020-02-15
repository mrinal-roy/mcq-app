
const quizReducer = (state, action) => {
    switch(action.type) {
        case 'SET_OPTIONS':
            return Object.assign({}, state, {correct_ans: payload.correct, 
                incorrect_ans: payload.incorrect}) 
        
        case 'SHUFFLE_OPTIONS':
            return Object.assign({}, state, {alloptions: shuffle((incorrect_ans.push(correct_ans)))})
                
        
        case 'CAPTURE_USER_ANSWER':
            return Object.assign({}, state, {userchoice: alloptions[payload.index],
                usercorrect: (userchoice === correct_ans) ? usercorrect+1 : usercorrect,
                score: usercorrect ? score+1 : score})
        
        case 'NEXT_QUESTION_TRACK':
            return Object.assign({}, state, {countOfQuestion: action.payload+1})
            
        default: return state
    }
};

export default quizReducer