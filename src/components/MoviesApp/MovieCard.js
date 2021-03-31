import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {removeMovie} from '../../actions/moviesActions'

const MovieCard = (props) =>{
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState('')
    const [toggle, setToggle] = useState(false)
    const movies = useSelector((state) => {
        return state.movies
    })
    const dispatch = useDispatch()

    const removeItem = (id) =>{
        dispatch(removeMovie(id))
    }

    const handleChange= (e) =>{
        const result = e.target.name
        if(result === "search"){
            setSearch(e.target.value)
        }else if(result === "order"){
            setOrder(e.target.value)
            setToggle(true)
        }
    }
   
    const searchFunctionality = () =>{
        const result = movies.filter(ele => {
            return ele.name.toLowerCase().includes(search.toLowerCase()) || ele.IMDB.toString().includes(search)
        })
        return result
        //setFilterMovies(result)
    }
    const handleOrder = () => {
        if(order === "AlphabaticOrder"){
            const result = movies.sort((a, b) => (a.name > b.name) ? 1 : -1)
            return result
        }else if(order === "NumericOrder") {
            const result = movies.sort((a, b) => (a.IMDB - b.IMDB))
             return result
            
        }else if(order === ""){
            return searchFunctionality()
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <input type="text" name="search" placeholder="Search by name..." value={search} onChange={handleChange}  style={{width:"500px"}}/> 
                </Col>
                <Col>
                    <select value={order} name="order" onChange={handleChange} style={{width:"121px" ,height: "31px"}}>
                        <option>order by</option>
                        <option  value="AlphabaticOrder">A-Z</option>
                        <option value="NumericOrder">Ranking</option>
                    </select>
                </Col>
            </Row>
            
            <br />
            <Row>
            {  toggle ? (
                handleOrder().map((ele,i) => {
                    return (
                        <Col key={i}>
                            <div  className="card" style={{width:"300px"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Name: {ele.name}</h5>
                                    <p className="card-text">Rating:{ele.IMDB}</p>
                                    {/* <Col md="12">  */}
                                    <svg onClick={() =>{
                                        removeItem(ele.id)
                                        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red"  fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    {/* </Col> */}
                                </div>
                                    
                            </div>
                            <br />
                        </Col>
                    )
                })
                ) : (
                    searchFunctionality().map((ele,i) => {
                        return (
                            <Col key={i}>
                                <div  className="card" style={{width:"300px"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {ele.name}</h5>
                                        <p className="card-text">Rating:{ele.IMDB}</p>
                                        {/* <Col md="12">  */}
                                        <svg onClick={() =>{
                                            removeItem(ele.id)
                                            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red"  fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                        {/* </Col> */}
                                    </div>
                                        
                                </div>
                                <br />
                            </Col>
                        )
                    })
                )
               
            }
            </Row>
        </Container>
    )
}
export default MovieCard

