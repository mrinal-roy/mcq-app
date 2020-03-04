export const startQuizAction = (start) => {
    console.log("START_QUIZ")
    return {
        type: 'START_QUIZ',
        payload: start
    }
};

export const fetchingAllQuestionsAction = (start) => {
    console.log("FETCHING_QUESTIONS_THRU_API_CALL")
    return {
        type: 'FETCHING_QUESTIONS_THRU_API_CALL',
    }
};

export const fetchedAllQuestionsAction = (questions_arg, totalquestions_arg, start_arg) => {
    console.log("FETCHED_ALL_QUESTIONS")   
    return {
        type: 'FETCHED_ALL_QUESTIONS',
        payload: {questions: questions_arg, totalquestions: totalquestions_arg, start: start_arg}
    }
}