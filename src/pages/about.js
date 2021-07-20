/** @jsxRuntime classic
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export default function AboutPage() {
  // Add new footer for about page
  return (
    <div>
      <div sx={{ 
        marginTop: '73px', 
        display: 'flex', 
        paddingTop: '105px', 
        paddingBottom: '105px', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottom: '1px solid #000' }}
      >
        <div sx={{ display: 'flex', maxHeight: 'none', width: 'auto', maxWidth: '20ch', lineHeight: '100%' }}>
          <h1>This section is about me!</h1>
        </div>
      </div>
      <section>
        <h1>This section is about this project!</h1>
      </section>
      <section>
        <h1>This section is about what I hope to accomplish with this project!</h1>
      </section>
    </div>
  );
};