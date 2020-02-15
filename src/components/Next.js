import React, {Component} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setOptionsAction, shuffleChoiceActions, captureUserAction, nextQuestionAction} from '../actions/quizAction'

const Next = (props) => {
    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary"
                        onClick={props.nextQuestionHandler}
                
                >Next</Button>
            </ButtonToolbar>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuestionHandler: (event) => {
            console.log("next question handler");
            dispatch(nextQuestionAction())
            
            }
    }
}

export default connect(null, mapDispatchToProps)(Next)