import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';

import Link from '@/components/navigation/link/Link';

import { HeaderAppBar, HeaderDrawer, HeaderLogo } from '../Header.styled';

export const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton edge={'start'} color={'inherit'} onClick={handleOpenDrawer}>
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
