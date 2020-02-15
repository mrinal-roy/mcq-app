import React, {Component} from 'react'
import { InputGroup, Alert } from 'react-bootstrap';
import {setOptionsAction, shuffleChoiceActions, captureUserAction} from '../actions/quizAction'
import {connect} from 'react-redux';

const Choices = (props) => {
    return (
        <div>
            {props.allquestions ?
                props.allquestions.map((eachOption, key) => {
                    return (<InputGroup className="mb-3">
                        <InputGroup.Checkbox
                            aria-label="Checkbox for following text input"
                            checked={false}
                            onChange={props.userSelectionHandler}
                            user_answer_key={key + 1} />
                        <Alert variant="secondary">{eachOption}</Alert>
                    </InputGroup>)
                }) : null}
        </div>
    )
            }

const mapStateToProps = (state) => {
    console.log(state.started, state.allquestions)
    return({
        alloptions: state.quizReducer.alloptions
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        arrangeChoicesHandler: (props) => {
            console.log("arrange choices");
            dispatch(setOptionsAction(props.correct, props.incorrect))
            dispatch(shuffleChoiceActions())
            console.log("shuffle correct and incorrect options")
            },
        userSelectionHandler: (props) => {
            console.log("user entered value; evaluate and record it");
            dispatch(captureUserAction(props.user_answer_key-1))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
