import React from 'react'

function HomeCard({backdrop_path}) {
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
      </div>
    </div>
  )
}

export default HomeCard