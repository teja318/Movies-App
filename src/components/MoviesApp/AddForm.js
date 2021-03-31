import React, { useState } from 'react'
import {addMovie} from '../../actions/moviesActions'
import {useDispatch} from 'react-redux'
//import { addMovie } from '../../actions/moviesActions'

const AddForm = (props) =>{
    const [name, setName] = useState('')
    const [imdb, setImdb] = useState('')

    const dispatch = useDispatch()
    const handleChange=(e) =>{
        const result = e.target.name
        if(result === "name"){
            setName(e.target.value)
        }else if(result === "imdb") {
            setImdb(e.target.value)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name,
            IMDB: Number(imdb)
        }
        dispatch(addMovie(formData))
        setName('')
        setImdb('')
    }
    return(
        <div >
            <h2>Add Movie</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Movie Name' name="name"  value={name} onChange={handleChange} /> <br />
                <br />
                <input type="text" placeholder='IMDB Rating'  name="imdb" value={imdb} onChange={handleChange} /> <br />
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
export default AddForm