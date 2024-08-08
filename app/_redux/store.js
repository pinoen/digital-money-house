import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { userApi } from "./api/userApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export default store