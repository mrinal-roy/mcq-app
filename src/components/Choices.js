import React, {Component} from 'react'
import { InputGroup, Alert } from 'react-bootstrap';
import {setOptionsAction, shuffleChoiceActions, captureUserAction} from '../actions/quizAction'
import {connect} from 'react-redux';
import shuffle from '../shuffle';

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
        alloptions: state.quizReducer.alloptions,
        usercorrect: state.quizReducer.usercorrect
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        arrangeChoicesHandler: (props) => {
            console.log("arrange choices");
            dispatch(setOptionsAction(props.correct, props.incorrect))
            let temp_options = props.incorrect.push(props.correct)
            let options = shuffle(temp_options)
            dispatch(shuffleChoiceActions(options))
            console.log("shuffle correct and incorrect options")
            },
        userSelectionHandler: (props) => {
            console.log("user selection made");
            dispatch(captureUserAction(props.alloptions[props.user_answer_key-1]))
            let new_score = (props.alloptions[props.user_answer_key-1] === props.correct) ? props.usercorrect+1 : props.usercorrect
            console.log("user score or no score")
            dispatch(userAnswerCheckAction(new_score))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
