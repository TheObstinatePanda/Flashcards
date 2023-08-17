import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
                const {topId,name, icon} = action.payload;
                state.topics[topId] = {
                    id: topId,
                    name: name,
                    icon,
                    quizIds: []
                }

            },
        addQuizId: (state, action) => {
            const {topId, quizId} = action.payload;
            if (state.topics[topId]) {
                state.topics[topId].quizId.push(quizId);               
            }             
        }, 
    }    
})

export const selectTopics = (state) => {
    return state.topics.topics
}

export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;