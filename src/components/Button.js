import React from 'react'

const Button = ({Children,btnType,myBtnClass,onClick}) => {
    return (
        <div>
            <button className = {`btn ${btnType} ${myBtnClass}`} onClick={onClick}>
                {Children}
            </button>
        </div>
    )
}

export default Button
