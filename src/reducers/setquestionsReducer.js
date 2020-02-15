const setquestionsReducer = (state, action) => {
    switch(action.type) {
        case 'START_QUIZ':
            return Object.assign({}, state, {started: !action.payload} )
        
        case 'FETCHING_QUESTIONS_THRU_API_CALL':
            return Object.assign({}, state, {started: action.payload} )

        case 'FETCHED_ALL_QUESTIONS':
            return Object.assign({}, state, {allquestions: action.payload.questions, 
                totalquestions: action.payload.totalquestions,
                started: action.payload.start })
            
        default: return state
    }
};

export default setquestionsReducer




