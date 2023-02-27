import { Container, Toolbar } from '@mui/material';

import RoundedButton from '@/components/inputs/RoundedButton/RoundedButton';
import Link from '@/components/navigation/link/Link';

import { ButtonsContainer, HeaderAppBar, HeaderLogo } from './Header.styled';

const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return <HeaderDesktop />;
};

export default Header;

const HeaderDesktop: React.FC = () => {
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
