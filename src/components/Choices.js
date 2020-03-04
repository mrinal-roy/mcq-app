import React, {Component, useState} from 'react'
import { InputGroup, Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {updateUserScoreAction} from '../actions/quizAction'
import {connect} from 'react-redux';
import shuffle from '../shuffle';

const Choices = (props) => {
    const [useranswer, setUseranswer] = useState('')

    function userSelectionHandler (event) {
        setUseranswer(event.target.value)
    }

    function confirmAnswerHandler (event) {
        event.preventDefault()
        if(useranswer === props.correct) {
            props.increaseUserMarks(props.usercorrect)
        }
    }

    return (
        <div> 
            <InputGroup className="mb-3">
                <div style={{flexDirection: 'column'}}>
            {
            props.incorrect ?
            props.incorrect.map((eachOption, key) => {
                    return (
                        <Form.Check
                        type='radio'
                        label = {eachOption}
                        id = {eachOption + '_' + key}
                        value = {eachOption}
                        onChange = {userSelectionHandler}
                        checked = {useranswer === eachOption}
                        />
                    )
                    
                })
             : null}</div>
             </InputGroup>
             <Button onClick={confirmAnswerHandler}>Confirm</Button>
             
        </div>
    )
    }

const mapStateToProps = (state) => {
    console.log(state.started, state.allquestions)
    return({
        usercorrect: state.quizReducer.usercorrect,
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        increaseUserMarks: (old_score) => {
            dispatch(updateUserScoreAction(old_score));
        }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
