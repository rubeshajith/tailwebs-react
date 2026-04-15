import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MOCK_PRODUCTS } from "../../data/mockData";

// Simulate async API call with delay
// TODO: replace with real API endpoint once backend is ready
// e.g. axios.get('/api/v1/egov/publications')
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return MOCK_PRODUCTS;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    searchQuery: "",
    activeCategory: "All",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setActiveCategory } = productsSlice.actions;
export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectSearchQuery = (state) => state.products.searchQuery;
export const selectActiveCategory = (state) => state.products.activeCategory;

export default productsSlice.reducer;
