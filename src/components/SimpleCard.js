import React from 'react'
import Button from './Button'

const SimpleCard = ({mycardClass,cardHeader,subHeader,cardHeaderclass,subHeaderclass,cardHeader2class,cardHeader2,cardParagraph,headerBaseParagraph,headerBaseParagraphClass,mybutton =null,}) => {
    return (
        <div className ={`card ${mycardClass}`}>
            <div>
                <div>
                    <h1 className ={cardHeaderclass}>{cardHeader}</h1>
                    <h2 className ={subHeaderclass}>{subHeader}</h2>
                </div>
                <div>{mybutton}</div>
            </div>
            <div>
            <h1 className ={cardHeader2class}>{cardHeader2}</h1>
            <p className ={cardHeader2class}>{cardParagraph}</p>
            <p className={headerBaseParagraphClass}>{headerBaseParagraph}</p>
            </div>
            
        </div>
    )
}

export default SimpleCard;
