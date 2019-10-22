import React from 'react'

const Button = ({children,btnType,myBtnClass,disabled,onClick}) => {
    return (
        <div>
            <button className = {`btn ${btnType} ${myBtnClass}`} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    )
}

export default Button
