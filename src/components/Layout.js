/** @jsxRuntime classic
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.SET_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main is="content" sx={{ variant: 'layout.main' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}