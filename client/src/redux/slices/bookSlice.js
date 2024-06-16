import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addBook = createAsyncThunk(
    'book/addBook',
    async (book, { rejectWithValue }) => {
        try {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        return books;
        } catch (error) {
        return rejectWithValue('An error occurred while adding book');
        }
    }
    );
export const removeBook = createAsyncThunk(
    'book/removeBook',
    async (isbn, { rejectWithValue }) => {
        try {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const newBooks = books.filter((book) => book.isbn !== isbn);
        localStorage.setItem('books', JSON.stringify(newBooks));
        return newBooks;
        } catch (error) {
        return rejectWithValue('An error occurred while removing book');
        }
    }
    );
export const getAllBooks = createAsyncThunk(
    'book/getAllBooks',
    async (_, { rejectWithValue }) => {
        try {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        return books;
        } catch (error) {
        return rejectWithValue('An error occurred while fetching books');
        }
    }
    );
export const updateBook = createAsyncThunk(
    'book/updateBook',
    async (book, { rejectWithValue }) => {
        try {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const index = books.findIndex((b) => b.isbn === book.isbn);
        books[index] = book;
        localStorage.setItem('books', JSON.stringify(books));
        return books;
        } catch (error) {
        return rejectWithValue('An error occurred while updating book');
        }
    }
    );

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addBook.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addBook.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        })
        .addCase(addBook.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(removeBook.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(removeBook.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        })
        .addCase(removeBook.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }) 
         .addCase(updateBook.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateBook.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        })
        .addCase(updateBook.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export default bookSlice.reducer;