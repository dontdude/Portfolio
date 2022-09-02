import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div>
            <h3>{props.title}</h3>
            <span>{props.year}</span>
          </div>
        </div>
        {/* <hr />
        <p>{props.desc}</p> */}
      </div>
    </>
  )
}

export default Card
