import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const addVisitor = createAsyncThunk(
    'visitor/addVisitor',
    async(visitor,{rejectWithValue})=>{
        try{
            const visitors = JSON.parse(localStorage.getItem('visitors')) || [];
            visitors.push(visitor);
            localStorage.setItem('visitors',JSON.stringify(visitors));
            return visitors;
        }catch(error){
            return rejectWithValue('An error occurred while adding visitor');
        }
    }  
);
export const removeVisitor = createAsyncThunk(
    'visitor/removeVisitor',
    async(id,{rejectWithValue})=>{
        try{
            const visitors = JSON.parse(localStorage.getItem('visitors')) || [];
            const newVisitors = visitors.filter((visitor)=>visitor.phone !== id);
            localStorage.setItem('visitors',JSON.stringify(newVisitors));
            return newVisitors;
        }catch(error){
            return rejectWithValue('An error occurred while removing visitor');
        }
    }
);
export const getAllVisitors = createAsyncThunk(
    'visitor/getAllVisitors',
    async(_, {rejectWithValue})=>{
        try{
            const visitors = JSON.parse(localStorage.getItem('visitors')) || [];
            return visitors;
        }catch(error){
            return rejectWithValue('An error occurred while fetching visitors');
        }
    }
);
export const updateVisitor = createAsyncThunk(
    'visitor/updateVisitor',
    async(visitor,{rejectWithValue})=>{    
        try{
            const visitors = JSON.parse(localStorage.getItem('visitors')) || [];
            const index = visitors.findIndex((v)=>v.phone === visitor.phone);
            visitors[index] = visitor;
            localStorage.setItem('visitors',JSON.stringify(visitors));
            return visitors;
        }catch(error){
            return rejectWithValue('An error occurred while updating visitor');
        }
    }
);

const visitorSlice = createSlice({
    name:'visitor',
    initialState:{
        visitors:[],
        loading:false,
        error:null,
    },
    reducers:{
        clearState:(state)=>{
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
    builder
    .addCase(addVisitor.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(addVisitor.fulfilled,(state,{payload})=>{
        state.visitors = payload;
        state.loading = false;
    })
    .addCase(addVisitor.rejected,(state,{payload})=>{
        state.error = payload;
        state.loading = false;
    })
    .addCase(removeVisitor.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(removeVisitor.fulfilled,(state,{payload})=>{
        state.visitors = payload;
        state.loading = false;
    })
    .addCase(removeVisitor.rejected,(state,{payload})=>{    
        state.error = payload;
        state.loading = false;
    })
    .addCase(getAllVisitors.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getAllVisitors.fulfilled,(state,{payload})=>{
        state.visitors = payload;
        state.loading = false;
    })
    .addCase(getAllVisitors.rejected,(state,{payload})=>{
        state.error = payload;
        state.loading = false;
    })
    .addCase(updateVisitor.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(updateVisitor.fulfilled,(state,{payload})=>{
        state.visitors = payload;
        state.loading = false;
    })
    .addCase(updateVisitor.rejected,(state,{payload})=>{
        state.error = payload;
        state.loading = false;
    })
    
},
});

export const {clearState} = visitorSlice.actions;
export default visitorSlice.reducer;