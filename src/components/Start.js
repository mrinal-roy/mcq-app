import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {startQuizAction, fetchingAllQuestionsAction, fetchedAllQuestionsAction} from '../actions/startAction'
import {getQuizQuestions} from '../apicall'


const Start = (props) => {
    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary"
                    onClick={props.startQuizHandler}
                    >
                        Start Quiz</Button>   
            </ButtonToolbar>
        </div>
    )
}

function shuffle(input_array) {
    let ctr = input_array.length;
    let temp;
    let index;
    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = input_array[ctr];
        input_array[ctr] = input_array[index];
        input_array[index] = temp;
    }
    return input_array;
}

const mapDispatchToProps = (dispatch) => {
    return {
        startQuizHandler: (event) => {
            console.log("start quiz handler");
            let start = true;
            dispatch(startQuizAction(start))
            console.log("dispatched to action for start")
            dispatch(fetchingAllQuestionsAction())
            console.log("dispatched to action for API call")
            getQuizQuestions().then(
                (allquestions) => {
                    console.log("API call success : ", allquestions);
                    let total = allquestions.length;
                    allquestions.map((eachQuestion) => {
                        let answer_options = eachQuestion.incorrect_answers
                        answer_options.push(eachQuestion.correct_answer)
                        let all_answers = shuffle(answer_options)
                        Object.assign({}, eachQuestion, 
                            {"all_answers": all_answers}
                            )
                    })
                    return dispatch(fetchedAllQuestionsAction(allquestions, total, start))
                }
            )}
    }
}

export default connect(null, mapDispatchToProps)(Start)



