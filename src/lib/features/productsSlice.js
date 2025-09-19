"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "https://bdsapi.bwdemo.in/v1";
export const FILE_BASE_URL = "https://bdsapi.bwdemo.in/";

// Products fetch
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data.products;
});

// Books fetch
export const fetchBooks = createAsyncThunk("products/fetchBooks", async () => {
  const response = await fetch(`${API_BASE_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data.data.books; // API ke response structure ke hisaab se adjust karna
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // books
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
