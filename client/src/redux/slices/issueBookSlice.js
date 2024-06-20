import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    issueBook: [],
    loading: false,
    error: null,
};

export const addIssueBook = createAsyncThunk(
    'issueBook/addIssueBook',
    async (data,{rejectWithValue})=>{
    try{
        const issueBook = JSON.parse(localStorage.getItem('issueBook')) || [];
        data.dueAmount = parseInt(data.amount) - parseInt(data.paidAmount);
        console.log(data);
        issueBook.push(data);
        localStorage.setItem('issueBook',JSON.stringify(issueBook));
        return issueBook;
    }catch(error){
        return rejectWithValue('An error occurred while adding issueBook');
    }
});

export const getAllIssueBook = createAsyncThunk(
    'issueBook/getAllIssueBook',
    async (_, {rejectWithValue})=>{
    try{
   
        let issueBook = JSON.parse(localStorage.getItem('issueBook')) || [];
        return issueBook;
    }catch(error){
        return rejectWithValue('An error occurred while fetching issueBook');
    }
});
export const removeIssueBook = createAsyncThunk(
    'issueBook/removeIssueBook',
    async (isbn,{rejectWithValue})=>{
    try{
        const issueBook = JSON.parse(localStorage.getItem('issueBook')) || [];
        const newIssueBook = issueBook.filter((issueBook)=>issueBook.isbn !== isbn);
        localStorage.setItem('issueBook',JSON.stringify(newIssueBook));
        return newIssueBook;
    }catch(error){
        return rejectWithValue('An error occurred while removing issueBook');
    }
});
export const updateIssueBook = createAsyncThunk(
    'issueBook/updateIssueBook',
    async (data,{rejectWithValue})=>{
    try{
        let issueBook = JSON.parse(localStorage.getItem('issueBook')) || [];
        const index = issueBook.findIndex((v)=>v.isbn === data.isbn);
        data.dueAmount = parseInt(data.amount) - parseInt(data.paidAmount);
        issueBook[index] = data;
        localStorage.setItem('issueBook',JSON.stringify(issueBook));
        return issueBook;
    }catch(error){
        return rejectWithValue('An error occurred while updating issueBook');
    }
});

const issueBookSlice = createSlice({
    name: 'issueBook',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(addIssueBook.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(addIssueBook.fulfilled,(state,action)=>{
            state.issueBook = action.payload;
            state.loading = false;
        })
        .addCase(addIssueBook.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAllIssueBook.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllIssueBook.fulfilled,(state,action)=>{
            state.issueBook = action.payload;
            state.loading = false;
        })
        .addCase(getAllIssueBook.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(removeIssueBook.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(removeIssueBook.fulfilled,(state,action)=>{
            state.issueBook = action.payload;
            state.loading = false;
        })
        .addCase(removeIssueBook.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateIssueBook.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(updateIssueBook.fulfilled,(state,action)=>{
            state.issueBook = action.payload;
            state.loading = false;
        })
        .addCase(updateIssueBook.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        });

    }
});

export default issueBookSlice.reducer;