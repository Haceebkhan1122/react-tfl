const initialState = {
    droppingSoons : [],
    droppingSoon:{},
    loading: true
}

const  droppingSoonReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_DROPPING_SOONS':
            console.log("Action Data = > ",action.data)
            return {...state,droppingSoons : action.data,loading: false}
        
        case 'GET_DROPPING_SOON':
            console.log("Action Darta = >",action.payload)
            return {...state,droppingSoon:action.payload,loading:false}
        
        case 'SET_LOADER':
            return {...state,loading : true}
        default:
            return {...state};

    }

}

export default droppingSoonReducer