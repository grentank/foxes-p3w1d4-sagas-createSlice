import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './postsSlice';
import mySaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(mySaga);
