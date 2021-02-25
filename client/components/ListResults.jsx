import React from 'react'

import { connect } from 'react-redux'

function ListResults (props) {
  const { parks } = props

  return (
    <div>
      <ul>
        {parks.map(park => {
          return <li key ={park.address}>{park.address} {park.price}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({ parks: state.parks })

export default connect(mapStateToProps)(ListResults)
