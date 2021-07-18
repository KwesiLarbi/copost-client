/** @jsxRuntime classic
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Image, Container, Box, Link } from 'theme-ui';
import { Button, Typography, Grid } from '@material-ui/core';
/*import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';*/
import imgSrc from '../../../assets/images/placeholder.png';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { likePost } from '../../../actions/posts';

export default function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <section sx={styles.postSection} id="posts">
      <div 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        <main
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
          }}>
            <div sx={styles.postBody}>
              <div sx={styles.postUser}>
                <div sx={{ paddingBottom: '8px', display: 'block' }}>
                  <div sx={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                    <Link href="/" sx={{ textDecoration: 'none' }}>
                      <Image sx={{ width: '20px', height: '20px', borderRadius: '4px', verticalAlign: 'middle' }} src={imgSrc} alt="Covid-19 App" />
                    </Link>
                    <div sx={{ flexWrap: 'wrap', alignItems: 'center', display: 'flex' }}>
                      <div sx={{ height: '16px', display: 'block' }}>
                        <div>
                          <div sx={{ display: 'block' }}>
                            <Link href="/" sx={{ margin: '0px', padding: '0px', textDecoration: 'none' }}>
                              <h4 sx={styles.title}>
                                {post.creator}
                              </h4>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/" sx={styles.postPreview}>
                <h2 sx={styles.postTitle}>{post.title}</h2>
                <div sx={styles.postPreviewDiv}>
                  <h3 sx={styles.postText}>{post.previewText}</h3> 
                </div>
              </Link>
              <div sx={styles.postBottom}>
                <div sx={{ alignItems: 'center', minWidth: '0px', display: 'flex' }}>
                  <span sx={{ whiteSpace: 'nowrap' }}>
                    <span sx={{ color: 'rgb(117, 117, 117)', fontSize: '13px', lineHeight: '20px' }}>{moment(post.createdAt).fromNow()}</span>
                  </span>
                  <div sx={{ top: '-1', paddingRight: '6px', paddingLeft: '6px', position: 'relative', height: '100%', display: 'block' }}>
                    <span sx={{ display: 'block' }}>
                      <span sx={{ color: 'rgb(117, 117, 117)', lineHeight: '20px', fontSize: '14px' }}>.</span>
                    </span>
                  </div>
                  <Link href="/" sx={{ margin: '0px', padding: '0px', textDecoration: 'none' }}>
                    <div sx={{ borderRadius: '100px', padding: '2px 8px', position: 'relative', backgroundColor: 'rgb(242,242,242)', display: 'block' }}>
                      <p sx={{ color: 'rgb(117, 117, 117)', fontSize: '13px', lineHeight: '20px', margin: 0 }}>
                        <span sx={{ whiteSpace: 'nowrap' }}>
                          {post.tags.map((tag) => `${tag} `)}
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </main>
        <aside
          sx={{
            flexGrow: 1,
            flexBasis: 'sidebar'
          }}
        >
          <Image sx={styles.img} src={imgSrc} alt="Covid-19 App" />
        </aside>
      </div>
    </section>
  );
};

const styles = {
  title: {
    paddingRight: '2px', 
    textOverflow: 'ellipsis', 
    maxHeight: '16px', 
    overflow: 'hidden', 
    fontSize: '13px', 
    lineHeight: '16px', 
    fontWeight: 500, 
    color: 'rgb(41,41,41)',
    margin: 0
  },
  postBottom: {
    paddingBottom: '8px',
    alignItems: 'baseline',
    justifyContent: 'spaceBetween',
    display: 'flex'
  },
  postUser: {
    paddingBottom: '8px',
    display: 'block',
  },
  postText: {
    maxHeight: '40px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: 'rgb(117, 117, 117)',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400, 
    margin: 0
  },
  postPreviewDiv: {
    paddingTop: '4px',
    display: 'block'
  },
  postPreview: {
    margin: '0px',
    padding: '0px',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit'
  },
  img: {
    width: 150,
    height: 150,
  },
  postTitle: {
    fontFamily: 'sans-serif',
    letterSpacing: '0px',
    maxHeight: '56px',
    lineHeight: '28px',
    fontSize: '22px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 700,
    color: 'rgb(41, 41, 41)',
    margin: 0
  },
  postBody: {
    marginRight: '20px'
  },
  postSection: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '0px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'right',
      textAlign: 'right',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};