import React, {Component} from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import { nextQuestionAction } from '../actions/quizAction';

const Next = (props) => {

    function nextQuestionHandler (event) {
        event.preventDefault()
        props.dispatchNextQuestioAction(props.count)
    }

    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary"
                    onClick={nextQuestionHandler}>Next</Button>
            </ButtonToolbar>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNextQuestioAction: (old_count) => {
            console.log("next question handler" , old_count);
            dispatch(nextQuestionAction(++old_count))
            }
    }
}

const mapStateToProps = (state) => {
    console.log(
        "Quiz is on: ", state.setquestionsReducer.started, 
        "Questions: ", state.setquestionsReducer.allquestions, 
        "Total Questions: ", state.setquestionsReducer.totalquestions,
        "Count of Question:", state.quizReducer.countOfQuestion)
    return({
        count: state.quizReducer.countOfQuestion
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Next)