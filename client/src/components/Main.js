import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div class="p-5 mb-2 bg-success-subtle text-success-emphasis square-container text-center position-absolute top-50 start-50 translate-middle border border-5 border-black">
            <h1 class="text-white border border-success border-5 p-3 fs-1 fw-bold bg-black">GEOGRAPHY QUIZ</h1>
            <ol class="p-4">
                <ul class="p-3 fs-4">You will be asked 10 questions in total.</ul>
                <ul class="p-3 fs-4">You are allowed to visit previous questions to change your answers.</ul>
                <ul class="p-3 fs-4">The results are available at the end of the quiz.</ul>
                <ul class="p-3 fs-4">Good Luck!</ul>
            </ol>
            <form id="form">
                <input ref={inputRef} class ='text-center fs-4' type="text" placeholder = "Enter your name"/>
            </form>
            
            <div class = "p-5">
                <Link class='btn fs-4 border border-success border-3' to={'/quiz'} onClick={startQuiz}>Start Quiz</Link>
                
            </div>
        </div>
    )
}