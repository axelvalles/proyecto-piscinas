import { configureStore } from '@reduxjs/toolkit'
import { poolApi } from './api'

export const store = configureStore({
  reducer: {
    [poolApi.reducerPath]: poolApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(poolApi.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch