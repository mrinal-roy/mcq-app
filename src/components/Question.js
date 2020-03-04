import React , {useEffect} from 'react';
import Choices from './Choices';
import Next from './Next';
import Start from './Start';
import {connect} from 'react-redux';
import {setCurrentQuestionAction} from '../actions/quizAction'
import configureStore from '../store'

const Question = (props) => {
    // useEffect(() => {
    //     props.dispatchQuestionHandler
    // })

    return (
        <div>
            {props.isQuizOn && props.count<=props.totalQuestions
            ?  
            <div><h1>Your Question Goes Here ...</h1>
                <h3>{props.allQuestionsForQuiz[props.count-1].question}</h3>
                <Choices 
                    correct={props.allQuestionsForQuiz[props.count-1].correct_answer}
                    incorrect={props.allQuestionsForQuiz[props.count-1].incorrect_answers}
                    />
                <Next /></div>
            : 
            <div><Start /></div>
            }
            {(props.count-1 === props.totalQuestions && props.isQuizOn) && <div>
            <h2>You Answered {props.correctanswers} Correct Answers and {10-props.correctanswers} Incorrect Answers </h2>
            <h2>Your Grade: {props.correctanswers*100/10} %age </h2></div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        isQuizOn: state.setquestionsReducer.started,
        allQuestionsForQuiz: state.setquestionsReducer.allquestions,
        totalQuestions: state.setquestionsReducer.totalquestions,
        count: state.quizReducer.countOfQuestion,
        correctanswers: state.quizReducer.usercorrect
    })
}

export default connect(mapStateToProps)(Question)
