import { configureStore } from '@reduxjs/toolkit'
import usersReducer from   '../feactures/users/usersSlice'
import postsReducer from '../feactures/posts/postsSlice'




export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
})

