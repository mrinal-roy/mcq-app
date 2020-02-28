export const setOptionsAction = (correct_arg, incorrect_arg) => {
    console.log("SET_OPTIONS")
    return {
        type: "SET_OPTIONS",
        payload: {correct: correct_arg, incorrect: incorrect_arg}
    }
};

export const setCurrentQuestionAction = (question_arg) => {
    console.log("SET_CURRENT_QUESTION")
    return {
        type: "SET_CURRENT_QUESTION",
        payload: question_arg
    }
};

// export const setShuffledOptions = (options_arg) => {
//     console.log("SET_SHUFFLED_OPTIONS")
//     return {
//         type: "SET_SHUFFLED_OPTIONS",
//         payload: options_arg
//     }
// };

export const updateUserScoreAction = (old_score) => {
    console.log("INCREASE_USER_SCORE");
    return {
        type: "INCREASE_USER_SCORE",
        payload: old_score
    }
}

export const captureUserAction = (selectedanswer) => {  //not required
    console.log("CAPTURE_USER_ANSWER")
    return {
        type: "CAPTURE_USER_ANSWER",
        payload: selectedanswer
    }
};

export const userAnswerCheckAction = (updated_score) => {   //not required
    console.log("CHECK_USER_ANSWER")
    return {
        type: "CHECK_USER_ANSWER",
        payload: updated_score
    }
}

export const nextQuestionAction = (arg) => {
    console.log("NEXT_QUESTION_TRACK")   
    return {
        type: "NEXT_QUESTION_TRACK",
        payload: arg
    }
}




