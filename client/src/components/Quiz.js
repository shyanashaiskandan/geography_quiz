import React from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/FetchQuestion'
import { MovePrevQuestion } from '../hooks/FetchQuestion'
import { useState } from 'react'

/** redux store import  */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

    const [check, setChecked] = useState(undefined); 

    //const trace = useSelector(state => state.questions.trace);
    const result = useSelector (state => state.result.result); 
    const {queue, trace} = useSelector(state => state.questions);
    const dispatch = useDispatch();


    // next button event handler 
    function onNext() {
        if (trace < queue.length) {
            dispatch(MoveNextQuestion());

            /** insernts new result in the array  */
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
                
        }
        console.log('on next')
        /** update trace value by one using Move NExt Question */

        setChecked (undefined); 

    }

    // prev button event handler
    function onPrev() {
        if (trace > 0) {
            console.log('On next click')
            dispatch(MovePrevQuestion());
        }

    }

    function onChecked(check) {
        console.log(check)
        setChecked(check)
    }

    /** finished exam after the last quesition */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace="true"></Navigate>
    }

  return (
    <div class='container p-5'>
        <h1 class='text-black text-center border border-success border-5 p-3 fs-1 fw-bold'>Geography Quiz</h1>

        { /* display questions */ }
        <Questions onChecked={onChecked} />

        <div className = 'grid'>
            { trace > 0 ?  <button className = 'btn prev' onClick = {onPrev}>Prev</button> : <div></div>}
            <button className = 'btn next'onClick = {onNext}>Next</button>
        </div>
    </div>
  )
}
