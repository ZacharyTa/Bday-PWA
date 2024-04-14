// src/app/components/NavBar.js
import React from 'react';
import { TabNav, Flex } from '@radix-ui/themes'

const NavBar = () => {

  return (
    <TabNav.Root>
      <Flex justify="center" align="center" width="100%" style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 1000, background: '#191919',}}>
      <TabNav.Link href="/program" active>
        Program
      </TabNav.Link>
      <TabNav.Link href="/stats">
        Stats
      </TabNav.Link>
      <TabNav.Link href="/program-builder">
        Program Builder
      </TabNav.Link>
      </Flex>
    </TabNav.Root>
  );
};

export default NavBar;
