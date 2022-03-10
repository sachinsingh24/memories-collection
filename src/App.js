/** @format */

import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpg';
import Posts from './Components/Posts/Posts.js';
import Form from './Components/From/Form.js';
import useStyle from './Styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts';
const App = () => {
  const classes = useStyle();

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography
          className={classes.heading}
          variant='h2'
          color='inherit'
          align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.MainContainer}
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
