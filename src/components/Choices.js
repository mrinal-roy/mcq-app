import React, {Component, useState} from 'react'
import { InputGroup, Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {setOptionsAction, setShuffledOptions, captureUserAction, userAnswerCheckAction, updateUserScoreAction} from '../actions/quizAction'
import {connect} from 'react-redux';
import shuffle from '../shuffle';

const Choices = (props) => {
    const [useranswer, setUseranswer] = useState('')

    // let array1 = props.incorrect
    // console.log(array1)
    // let item = props.correct
    // console.log(item)
    // console.log(array1.push(item))
    // console.log(array1)

    // function shuffle(input_array) {
    //     let ctr = input_array.length;
    //     let temp;
    //     let index;
    //     // While there are elements in the array
    //     while (ctr > 0) {
    // // Pick a random index
    //         index = Math.floor(Math.random() * ctr);
    // // Decrease ctr by 1
    //         ctr--;
    // // And swap the last element with it
    //         temp = input_array[ctr];
    //         input_array[ctr] = input_array[index];
    //         input_array[index] = temp;
    //     }
    //     return input_array;
    // }

    // let options = shuffle(array1)
    // console.log(options)

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
        alloptions: state.quizReducer.alloptions,
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
