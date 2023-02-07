
const initialeState = {
    
    livers: [
        {id:1,title: 'React'},
        {id:2,title: 'Redux'},
    ],
    nextId : 3

}

const reducer = (state = initialeState, action ) =>{

    switch (action.type){

        case "ADD_LIVRE":
            const livre = {...action.payload, id:state.nextId}
            
            return{
                ...state,
                livers:[...state.livers, livre],
                nextId: state.nextId +1

            }
    
        case 'Delete_LIVRE':
            return{
                ...state,
                livers:[...state.livers.filter(l => l.id !== action.payload )]

            }



        default : 
        return state

    }
    
    
}

export default reducer