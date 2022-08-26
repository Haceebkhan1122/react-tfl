const initialState = {
    hotSales : [],
    hotSale:{},
    loading: true
}

const  hotSaleReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_HOT_SALES':
            console.log("Action Data = > ",action.data)
            return {...state,hotSales : action.data,loading: false}
        
        case 'GET_HOT_SALE':
            console.log("Action Darta = >",action.payload)
            return {...state,hotSale:action.payload,loading:false}
        
        case 'SET_LOADER':
            return {...state,loading : true}
        default:
            return {...state};

    }

}

export default hotSaleReducer