import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            return {
                cards: {
                    ...state.cards,
                    [action.payload.id]: {
                        id: action.payload.id,
                        
                    }
                }
            }
        }
    }
})

export const selectCards = (state) => state.cards.cards;
export const { addCard} = cardsSlice.actions;
export default cardsSlice.reducer;