export const setOptionsAction = (correct, incorrect) => {
    console.log("SET_OPTIONS")
    return {
        type: "SET_OPTIONS",
        payload: {correct, incorrect}
    }
};

export const shuffleChoiceActions = () => {
    console.log("SHUFFLE_OPTIONS")
    return {
        type: "SHUFFLE_OPTIONS",
    }
};

export const captureUserAction = (index) => {
    console.log("CAPTURE_USER_ANSWER")
    return {
        type: "CAPTURE_USER_ANSWER",
        payload: index
    }
};

export const nextQuestionAction = () => {
    console.log("NEXT_QUESTION_TRACK")   
    return {
        type: "NEXT_QUESTION_TRACK",
        payload: 1
    }
}




