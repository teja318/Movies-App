const moviesIntialValue = []

const moviesReducer = (state = moviesIntialValue,action) =>{
    switch(action.type){
        case 'ADD_MOVIE':{
            return [...state, {...action.payload}]
        }
        case 'REMOVE_MOVIE':{
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        default:{
            return [...state]
        }
    }
}
export default moviesReducer