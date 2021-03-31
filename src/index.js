import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { Container } from 'react-bootstrap'

const store = configureStore()
console.log(store.getState())
store.subscribe(() =>{
  console.log(store.getState())
  //localStorage.setItem('movieList' , JSON.stringify(store.getState()))
  
})


ReactDOM.render(<Provider store={store}>
  <Container>
    <App />
    </Container>
  </Provider>,
  document.getElementById('root')

)
