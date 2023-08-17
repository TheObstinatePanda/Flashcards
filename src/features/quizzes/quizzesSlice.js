import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const createQuiz = createAsyncThunk(
    "quizzesSlice/createQuiz",
    async(quiz, { dispatch }) => {
        const response = await addQuiz(quiz);
        dispatch(response);
        const quizId = {
            quizId: response.payload.id, 
            topicId: response.payload.topicId
        };
        const addedQuiz = await addQuizId(quizId);
        dispatch(addedQuiz);
    }        
)

export const quizzesSlice = createSlice({
    name: 'quizzesSlice',
    initialState: {quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            return {
                quizzes : {
                    ...state.quizzes,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        topicId: action.payload.topicId,
                        cardIds: action.payload.cardIds
                    }
                }  
            }                     
        }, 
    },
    failedToSaveQuiz: false,
    savingQuiz: false,
    extraReducers: (builder) => {
        builder
            .addCase(createQuiz.pending, (state) => {
                state.savingQuiz = true;
                state.failedToSaveQuiz = false;
            })
            .addCase(createQuiz.fulfilled, (state, action) => {
                state.savingQuiz = false;
                state.failedToSaveQuiz = false;
            })
            .addCase(createQuiz.rejected, (state) => {
                state.savingQuiz = false;
                state.failedToSaveQuiz = true;
            })
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;