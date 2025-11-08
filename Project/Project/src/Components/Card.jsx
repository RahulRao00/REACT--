import React from 'react'

function Card(props) {
  return (
    <>
    

    <div className="card">

        <h2> this is my first card in react {props.some  } </h2>
        <h2>  {props.second  } </h2>

    </div>

    </>
  )
}

export default Card