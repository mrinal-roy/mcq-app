import React, {Component} from 'react'
import { InputGroup, Alert } from 'react-bootstrap';
import {setOptionsAction, setShuffledOptions, captureUserAction, userAnswerCheckAction} from '../actions/quizAction'
import {connect} from 'react-redux';
import shuffle from '../shuffle';

const Choices = (props) => {
    let array1 = props.incorrect
    let item = props.correct
    console.log(array1.push(item))
    console.log(array1)

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

    let options = shuffle(array1)
    console.log(options)
    return (
        <div>
            {
            options ?
                options.map((eachOption, key) => {
                    return (<InputGroup className="mb-3">
                        <InputGroup.Checkbox
                            aria-label="Checkbox for following text input"
                            checked={props.userSelectionHandler}
                            onChange={props.userSelectionHandler(eachOption, props)}
                            user_answer_key={key}
                             />
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
            // dispatch(setShuffledOptions(options))
            console.log("shuffle correct and incorrect options")
            },
        userSelectionHandler: (eachOption, props) => {
            console.log("user selection made");
            dispatch(captureUserAction(eachOption));
            let new_score = (eachOption === props.correct) ? props.usercorrect+1 : props.usercorrect;
            console.log("user score or no score");
            dispatch(userAnswerCheckAction(new_score));
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
