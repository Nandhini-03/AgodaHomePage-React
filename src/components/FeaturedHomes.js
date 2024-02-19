import React from 'react'
import NewDelhi from './NewDelhi'
import { Routes,Route, NavLink } from 'react-router-dom'
import Goa from './Goa'
import Mumbai from './Mumbai'
import Bangalore from './Bangalore'
import Chennai from './Chennai'

function FeaturedHomes() {
  const navLinkStyles=({isActive}) =>
    {
        return{
        borderBottom: isActive ? '2px solid rgb(83, 146, 249)' : 'none'
        }
    }
  return (
    <div>
        <div className="featured-homes-head-style">
            <h3 className="featured-homes-heading">Featured homes recommended for you</h3>
        </div>

        <nav>
          <div style={{borderBottom: '1px solid rgb(221, 223, 226)',display:"flex"}}>
            <div className='nav-style'>
              <NavLink style={navLinkStyles} to='/newdelhi'>NewDelhi and NCR</NavLink>
            </div>
            <div className='nav-style'>
              <NavLink style={navLinkStyles} to='/goa'>Goa</NavLink>
            </div>
            <div className='nav-style'>
              <NavLink style={navLinkStyles} to='/mumbai'>Mumbai</NavLink>
            </div>
            <div className='nav-style'>
              <NavLink style={navLinkStyles} to='/bangalore'>Bangalore</NavLink>
            </div>
            <div className='nav-style'>
              <NavLink style={navLinkStyles} to='/chennai'>Chennai</NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='newdelhi' element={<NewDelhi />} />
          <Route path='goa' element={<Goa />} />
          <Route path='mumbai' element={<Mumbai />} />
          <Route path='bangalore' element={<Bangalore />} />
          <Route path='chennai' element={<Chennai />} />
        </Routes>
        
    </div>
  )
}

export default FeaturedHomes
