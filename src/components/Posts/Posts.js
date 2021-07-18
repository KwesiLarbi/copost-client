/** @jsxRuntime classic
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

export default function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <section sx={{ variant: 'section.keyFeature' }} id="about">
        <Container>
          <Grid sx={styles.grid}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    )
  )
};

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)'
    ],
  },
};

