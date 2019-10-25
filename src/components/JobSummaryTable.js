import React from 'react'
// import {AllStates as States} from './searchedOptions'
import '../css/Card.css'

const JobSummartTable = ({States,StateNo}) => {
    return (
        <div>
            <ul className = 'stateList'>  
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Lagos</span><em className ='ml-2'>1</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Ondo</span><em className ='ml-2'>1</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Edo</span><em className ='ml-2'>1</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Abuja</span><em className ='ml-2'>1</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Ekiti</span><em className ='ml-2'>1</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Oyo</span><em className ='ml-2'>5</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Delta</span><em className ='ml-2'>7</em>  </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Ogun</span><em className ='ml-2'>4</em> </li>
                    <li className ='py-3 my-3 mr-5'><span className ='font-weight-bolder ml-3'>Imo</span><em className ='ml-2'>1</em> </li>

            </ul>
        </div>
    )
}

export default JobSummartTable


/*
<ul className = 'stateList'>
                {States.map((state,i)=>
                    <li className ='py-3 my-3 mr-5' key={i}>
                        {state}<span className ='font-weight-bolder ml-3'>{StateNo}</span>
                    </li>
                )}

            </ul>
*/ 