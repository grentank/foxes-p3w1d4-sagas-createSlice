import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

export default function MyForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(input));
  }, [input]);
  return (
    <TextField
      value={input}
      onChange={(e) => setInput(e.target.value)}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
    />
  );
}
