import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';

import RoundedButton from '@/components/inputs/RoundedButton/RoundedButton';
import Link from '@/components/navigation/link/Link';
import { useIsMobile } from '@/hooks/useIsMobile';

import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from './Header.styled';

export const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="logo e-diaristas" />
        </Link>

        <div>&nbsp;</div>
        <div>&nbsp;</div>

        <ButtonsContainer>
          <Link
            Component={RoundedButton}
            mui={{ variant: 'contained', color: 'primary' }}
            href="/cadastro/diarista"
          >
            Seja um Diarista
          </Link>
          <Link href="/login">Login</Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC = () => {
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

const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const isMobile = useIsMobile();

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
