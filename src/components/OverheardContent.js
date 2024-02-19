import React from 'react'

function OverheardContent(props) {
  return (
    <article className='overheard-content'>
      <div style={{padding:"10px",height:"250px"}}>
        <p className='overheard-hotel'>{props.hotel}</p>
        <p className='overheard-place'>{props.place}</p>
        <p className='overheard-review'>{props.review}</p>
        <p className='overheard-reviewer'>{props.reviewer}</p>
      </div>
      <div style={{height:"5px",backgroundColor:"#75a8f9"}}/>
    </article>
  )
}

export default OverheardContent
