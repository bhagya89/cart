import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const exisItem = state.findIndex(item=>item.id===action.payload.id)
            if(exisItem!==-1){
                state[exisItem].quantity +=1;
            }else{
                state.push({...action.payload, quantity:1});
            }
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        plus(state, action){
       const itemIndex = state.findIndex(item=>item.id===action.payload)
       if(itemIndex!==-1){
        state[itemIndex].quantity +=1;
       }

        },
        minus(state,action){
            const itemIndex = state.findIndex(item=>item.id===action.payload)
            if(itemIndex!==-1&& state[itemIndex].quantity>1){
                state[itemIndex].quantity -=1;
            }
        }
    },
});

export const { add, remove , plus ,minus} = cartSlice.actions;
export default cartSlice.reducer;
