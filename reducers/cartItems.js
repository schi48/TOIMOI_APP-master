import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod"

const cartItems = (state = [], action) => {
   // console.log(state)
   
  // console.log( action)

    switch(action.type)
    {
        case 'ADD_TO_CART':
            state =  [...state, action.payload]

            // console.log("STATE1 = " + state)
            return state

        case 'REMOVE_FROM_CART':
            // return state.filter(cartItem => cartItem.title !== action.payload.title)
    
            return state
    }
    
    return state
}

export default cartItems