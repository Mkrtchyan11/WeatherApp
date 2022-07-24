import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/data/data";
import { searchInputReducer } from "./slices/searchInput/serachInputSlice";


const store = configureStore({
   reducer: {
      searchInput: searchInputReducer,
      data: dataReducer
   },
})


export default store