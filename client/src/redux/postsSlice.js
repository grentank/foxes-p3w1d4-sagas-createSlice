import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => action.payload,
    // action.payload,
    //   state = action.payload;
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, addPost } = postsSlice.actions;

// const fetchPosts = (input) => (dispatch) => {
//   axios.post('http://localhost:3001/', { input })
//     .then((res) => {
//       console.log(res.data);
//       dispatch(setPosts(res.data));
//     });
// };

const fetchPosts = (input) => ({ type: 'FETCH_POSTS', payload: input });

export default postsSlice.reducer;

export { fetchPosts };
