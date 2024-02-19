import React from 'react'
import OverheardContent from './OverheardContent'

const array=[
    {
        hotel:"Heritage Hotel",
        place:"in the Philippines",
        review:'"We got a great last minute rate with Agoda and this room was spacious with a comfortable and warm bed."',
        reviewer:"- Henry from Australia"
    },
    {
        hotel:"Meeru Island Resort & Spa",
        place:"in the Maldives",
        review:'"Our experience was truely memorable and hastle free. All thanks to Agoda and Meeru :) "',
        reviewer:"- Kewal from India"
    },
    {
        hotel:"Klausturhof Guesthouse",
        place:"in Icelend",
        review:'"I could not have asked for a better stay than Klausturhof. Thanks to Agoda."',
        reviewer:"- Vishwas from India"
    }
]
function Overheard() {
  return (
    <div className='overheard-section'>
      <h2 className='overheard-title'>Overheard from travelers</h2>
      <div className='overheard-content-section'>
        {
            array.map(data => <OverheardContent hotel={data.hotel} place={data.place} review={data.review} reviewer={data.reviewer}/>)
        }
      </div>
    </div>
  )
}

export default Overheard
