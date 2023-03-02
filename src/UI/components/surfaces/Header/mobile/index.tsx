import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';

import Link from '@/UI/components/navigation/link/Link';

import { HeaderAppBar, HeaderDrawer, HeaderLogo } from '../Header.styled';

export const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <HeaderAppBar role="header-app-bar-mobile" id="header-mobile">
      <Toolbar component={Container}>
        <IconButton
          edge={'start'}
          color={'inherit'}
          onClick={handleOpenDrawer}
          aria-label="open drawer"
        >
          <i className="twf-bars" />
        </IconButton>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="logo e-diaristas" />
        </Link>
      </Toolbar>
      <HeaderDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onClick={() => setIsDrawerOpen(false)}
        role="dialog"
      >
        <MenuList>
          <Link href="/login" Component={MenuItem}>
            Login
          </Link>
          <Divider />
          <Link href="/cadastro/diarista" Component={MenuItem}>
            Seja um(a) Diarista
          </Link>
        </MenuList>
      </HeaderDrawer>
    </HeaderAppBar>
  );
};
