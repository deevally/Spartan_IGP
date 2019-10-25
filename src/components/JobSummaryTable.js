import React from 'react'
// import {AllStates as States} from './searchedOptions'
import '../css/Card.css'

const JobSummartTable = ({States}) => {
    return (
        <div>
            <ul className = 'stateList'>
                {States.map((state,i)=>
                    <li className ='py-3 my-3 ml-4'>
                        {state}<span className ='font-weight-bolder ml-3'>{9}</span>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default JobSummartTable
