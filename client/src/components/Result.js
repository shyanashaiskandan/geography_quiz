import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';
import { UseSelector } from 'react-redux';


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    // usePublishResult({ 
    //     result, 
    //     username : userId,
    //     attempts,
    //     points: earnPoints,
    //     achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='text-black text-center border border-success border-5 p-3 fs-1 fw-bold'>Geography Quiz</h1>

        <div className='p-5 bg-success-subtle text-success-emphasis square-container text-center border border-5 border-black'>
            <div className='flex'>
                <span class="text-black">Username:</span>
                <span className='text-white fw-bold'>{userId || ""}</span>
            </div>
            <div className='flex'>
                <span class="text-black">Total Quiz Points : </span>
                <span className='text-white fw-bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span class="text-black">Total Questions : </span>
                <span className='text-white fw-bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span class="text-black">Total Attempts : </span>
                <span className='text-white fw-bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span class="text-black">Total Earn Points : </span>
                <span className='text-white fw-bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span class="text-black">Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn fs-4 border border-success border-3 bg-white' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>
    </div>
  )
}