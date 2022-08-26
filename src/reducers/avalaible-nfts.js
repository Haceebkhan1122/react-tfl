const initialState = {
    nfts : [],
    nft:{},
    loading: true
}

const nftReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_NFTS':
            console.log("Action Data = > ",action.data)
            return {...state,nfts : action.data,loading: false}
        
        case 'GET_NFT':
            console.log("Action Darta = >",action.payload)
            return {...state,nft:action.payload,loading:false}
        
        case 'SET_LOADER':
            return {...state,loading : true}
        default:
            return {...state};

    }

}

export default nftReducer