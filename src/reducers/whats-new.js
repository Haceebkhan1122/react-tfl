const initialState = {
    whatsNews : [],
    whatsNew:{},
    loading: true
}

const  whatsNewReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_WHATS_NEWS':
            console.log("Action Data = > ",action.data)
            return {...state,whatsNews : action.data,loading: false}
        
        case 'GET_WHATS_NEW':
            console.log("Action Darta = >",action.payload)
            return {...state,whatsNew:action.payload,loading:false}
        
        case 'SET_LOADER':
            return {...state,loading : true}
        default:
            return {...state};

    }

}

export default whatsNewReducer