"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const FILE_BASE_URL = process.env.NEXT_PUBLIC_API_FILE_BASE;

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.data.products;
  }
);

// Fetch products2 (from /products-2)
export const fetchProducts2 = createAsyncThunk(
  "products/fetchProducts2",
  async () => {
    const response = await fetch(`${API_BASE_URL}/products-2`);
    if (!response.ok) {
      throw new Error("Failed to fetch products2");
    }
    const data = await response.json();
    console.log("data", data);
    return data.data.products;
  }
);

// Fetch books (from /books)
export const fetchBooks = createAsyncThunk("products/fetchBooks", async () => {
  const response = await fetch(`${API_BASE_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  console.log("books:", data);

  return data.data.books;
});

// Products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    products2: [],
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchProducts
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

    // fetchProducts2
    builder
      .addCase(fetchProducts2.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts2.fulfilled, (state, action) => {
        state.loading = false;
        state.products2 = action.payload;
      })
      .addCase(fetchProducts2.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // fetchBooks
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
