import React from 'react'
import AddForm from './AddForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'
import {Container, Row, Col} from 'react-bootstrap'
const MoviesContainer = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={8}><MoviesList /></Col>
                <Col sm={4}>
                    <Row> 
                       <AddForm />
                    </Row>
                    <br />
                    <Row>
                        <MovieStats />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default MoviesContainer