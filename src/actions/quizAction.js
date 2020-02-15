export const setOptionsAction = (correct_arg, incorrect_arg) => {
    console.log("SET_OPTIONS")
    return {
        type: "SET_OPTIONS",
        payload: {correct: correct_arg, incorrect: incorrect_arg}
    }
};

export const shuffleChoiceActions = (options_arg) => {
    console.log("SHUFFLE_OPTIONS")
    return {
        type: "SHUFFLE_OPTIONS",
        payload: options_arg
    }
};

export const captureUserAction = (selectedanswer) => {
    console.log("CAPTURE_USER_ANSWER")
    return {
        type: "CAPTURE_USER_ANSWER",
        payload: selectedanswer
    }
};

export const userAnswerCheckAction = (updated_score) => {
    console.log("CHECK_USER_ANSWER")
    return {
        type: "CHECK_USER_ANSWER",
        payload: updated_score
    }
}

export const nextQuestionAction = () => {
    console.log("NEXT_QUESTION_TRACK")   
    return {
        type: "NEXT_QUESTION_TRACK",
        payload: 1
    }
}




