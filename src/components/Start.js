import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {startQuizAction, fetchingAllQuestionsAction, fetchedAllQuestionsAction} from '../actions/startAction'
import {getQuizQuestions} from '../apicall'
import shuffle from '../shuffle'


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
                    console.log("API call success");
                    let options = shuffle(allquestions.incorrect_ans.push(allquestions.correct_ans))
                    dispatch(fetchedAllQuestionsAction(allquestions, options, allquestions.length, start))
                }
            )}
    }
}

export default connect(null, mapDispatchToProps)(Start)
