import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const PostForm = () => {
  const [currentId, setCurrentId] = useState(null);
  const [postData, setPostdata] = useState({
    creator: '',
    title: '',
    previewText: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostdata(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostdata({ 
      creator: '', 
      title: '', 
      previewText: '',
      message: '', 
      tags: '', 
      selectedFile: '' 
    })
  };

  return (
    <>
      <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostdata({ ...postData, title: e.target.value })} />
        <TextField 
          name="preview" 
          variant="outlined" 
          label="Preview Text" 
          fullWidth 
          value={postData.previewText} 
          onChange={(e) => setPostdata({ ...postData, previewText: e.target.value })} />
        <TextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          value={postData.message} 
          onChange={(e) => setPostdata({ ...postData, message: e.target.value })} />
        <TextField 
          name="tags" 
          variant="outlined" 
          label="Tags" 
          fullWidth 
          value={postData.tags} 
          onChange={(e) => setPostdata({ ...postData, tags: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
      </form>
    </>
  );
};

export default PostForm;