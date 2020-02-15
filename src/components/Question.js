import React from 'react';
import Choices from './Choices';
import Next from './Next';
import Start from './Start';
import {connect} from 'react-redux';
import configureStore from '../store'


const Question = (props) => {
    return (
        <div>
            {props.isQuizOn && props.count<=props.totalQuestions
            ?  
            <div><h1>Your Question Goes Here ...</h1>
                <h1>{props.allQuestionsForQuiz[props.count].question}</h1>
                <Choices 
                    correct={props.allQuestionsForQuiz[props.count].correct_answer} 
                    incorrect={props.allQuestionsForQuiz[props.count].incorrect_answers} 
                    />
                <Next /></div>
            : 
            <div><Start /></div>
            }
            {(props.count-1 === props.totalQuestions) && <div>
            <h2>You Answered {props.correctanswers} Correct Answers and {10-props.correctanswers} Answers </h2>
            <h2>Your Grade: {props.correctanswers*100/10} %age </h2></div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("Quiz is on: ", state.setquestionsReducer.started, "Questions: ", state.setquestionsReducer.allquestions, "Total Questions: ", state.setquestionsReducer.totalquestions)
    return({
        isQuizOn: state.setquestionsReducer.started,
        allQuestionsForQuiz: state.setquestionsReducer.allquestions,
        totalQuestions: state.setquestionsReducer.totalquestions,
        userEntry: state.quizReducer.userchoice,
        count: state.quizReducer.countOfQuestion,
        correctanswers: state.quizReducer.usercorrect
    })
}

export default connect(mapStateToProps)(Question)
