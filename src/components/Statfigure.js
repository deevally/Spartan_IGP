import React from "react";


const Statfigure = props => {

    return <div>
        <h3 >{props.title}</h3>
        <hr style= {{
            width: '30px',
            border: '2px solid #2992d0',
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '10px',

        }}/>
        <h1 style={{
            fontSize: '45px' ,
        }}>{props.number }</h1>
      </div>

}

export default Statfigure;