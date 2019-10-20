import React from 'react'

const Header = ({headerClassName,headerSecParagraphClass,headerTitle,headerParagraph,headerSecParagraph,headerTitleClass,headerParagraphClass}) => {
    return (
        <div className = {`container-fluid ${headerClassName}`}>
            <div>
                <h1 className = {headerTitleClass}>{headerTitle}</h1>
                <h1 className = {headerParagraphClass}>{headerParagraph}</h1>
            </div>
            <div>

            </div>
            <div  className = {headerSecParagraphClass}>
                {headerSecParagraph}
            </div>
        </div>
    )
}

export default Header
