import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const MovieStats = (props) =>{
  const movies = useSelector((state) => {
    return state.movies
  })

  const [newMovies, setNewMovies] = useState([])

  useEffect(() =>{
    const array = movies.map(ele =>{
      return ele.IMDB
    })
      
    const min = Math.min(...array)

    const result = movies.filter(ele =>{
      return ele.IMDB === min
    })
    setNewMovies(result)
  },[movies])
  
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Movie Stats</h2>
        <p className="card-text">Total Movies - {movies.length}</p>
        <p className="card-text">Top Movies - {newMovies.length}</p>
        <ul className="card-text">{
          newMovies.map((ele,i) =>{
            return <li key={i}>{ele.name}</li>
          })
        }
        </ul>
        
      </div>
    </div>
  )
}
export default MovieStats