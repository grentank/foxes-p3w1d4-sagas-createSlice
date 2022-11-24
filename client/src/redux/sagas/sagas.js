import {
  call, delay, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { setPosts } from '../postsSlice';

const axiosCall = (input) => axios.post('http://localhost:3001/', { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPostsWorker(action) {
  try {
    yield delay(1000);
    const res = yield call(axiosCall, action.payload);
    yield put(setPosts(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeLatest('FETCH_POSTS', fetchPostsWorker);
}

export default mySaga;
