import React from 'react'
import TopDestinations from './TopDestinations'
import Accommodation from './Accommodation'
import FlightsActivities from './FlightsActivities'
import FeaturedHomes from './FeaturedHomes'
import VacationRentals from './VacationRentals'
import Overheard from './Overheard'
import PopularDestination from './PopularDestination'

function BodyPart() {
  return (
    <div className='body-styling'>
      <TopDestinations />
      <Accommodation />
      <FlightsActivities />
      <FeaturedHomes />
      <VacationRentals />
      <Overheard />
      <PopularDestination />
    </div>
  )
}

export default BodyPart
