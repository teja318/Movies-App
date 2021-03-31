import React from 'react'
import MoviesContainer from './components/MoviesApp/MoviesContainer'

const App =(props)=>{
  return (
    <div>
      <h2>My Big Movie List</h2>
      <br />
      <MoviesContainer />
    </div>
  )
}
export default App