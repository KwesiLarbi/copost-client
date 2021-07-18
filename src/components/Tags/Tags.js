/** @jsxRuntime classic
/** @jsx jsx */
import React from 'react';
import { jsx, Link } from 'theme-ui';
import { useDispatch, useSelector } from 'react-redux';

export default function Tags() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <p>Not here</p> : (
      <section id="tags" sx={{ paddingTop: '50px' }}>
        <div>
          <div sx={{ display: 'block', borderBottom: '1px solid rgb(230, 230, 230)', paddingBottom: '24px' }}>
            <div sx={{ marginBottom: '16px', display: 'block' }}>
              <p sx={{  
                marginTop: 0,
                textTransform: 'uppercase', 
                letterSpacing: '0.083em', 
                lineHeight: '16px', 
                fontSize: '12px', 
                fontWeight: 700, 
                color: 'rgb(41, 41, 41)' }}
              >
                Discover more of what matters to you
              </p>
            </div>
            <div sx={{ display: 'block' }}>
              {posts.map(post => (
                <Link href="/" sx={{ margin: '0px', padding: '0px', textDecoration: 'none' }}>
                  <div sx={{ 
                    marginBottom: '8px', 
                    borderRadius: '3px', 
                    border: '1px solid rgb(230, 230, 230)', 
                    padding: '6px 16px', 
                    marginRight: '8px', 
                    display: 'inlineBlock' }}
                  >
                    <p sx={{ color: 'rgb(117, 117, 117)', fontSize: '13px', lineHeight: '20px', fontWeight: 400 }}>
                      {post.tags.join(',').toLowerCase().split(',')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};
