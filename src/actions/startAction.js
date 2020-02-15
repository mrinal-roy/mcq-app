export const startQuizAction = (start) => {
    console.log("START_QUIZ")
    return {
        type: "START_QUIZ",
        payload: start
    }
};

export const fetchingAllQuestionsAction = (start) => {
    console.log("FETCHING_QUESTIONS_THRU_API_CALL")
    return {
        type: "FETCHING_QUESTIONS_THRU_API_CALL",
        
    }
};

export const fetchedAllQuestionsAction = (questions, totalquestions, start) => {
    console.log("FETCHED_ALL_QUESTIONS")   
    return {
        type: "FETCHED_ALL_QUESTIONS",
        payload: {questions, options, totalquestions, start}
    }
}


