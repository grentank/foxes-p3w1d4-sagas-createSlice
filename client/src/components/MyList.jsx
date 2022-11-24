import {
  Grid, List, ListItem, ListItemButton,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function MyList() {
  const posts = useSelector((store) => store.posts);
  return (
    <Grid item xs={12}>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} disablePadding>
            <ListItemButton>
              {post.text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
