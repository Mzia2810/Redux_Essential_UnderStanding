import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
      smile: 0,
    },
    date: sub(new Date(), { minutes: 15 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
      smile: 0,
    },
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '3',
    title: 'Third Post',
    content: 'I am React Native Developer',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
      smile: 0,
    },
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    //// hand-written action creator
    //function postAdded(title, content) {
    //const id = nanoid()
    //return {
    //type: 'posts/postAdded',
    //payload: { id, title, content }
    //}
    //}
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      // generating random id
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
              smile: 0
            },
          },
        }
      },
    },
    postUpdated(state, action) {
      //payload field contains - it could be a string, a number, an object, an array, or something else
      // let's plan on having the payload field be an object with the three fields inside of it.
      //That means the action object will look like {type: 'posts/postUpdated', payload: {id, title, content}}.

      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions
export default postsSlice.reducer
