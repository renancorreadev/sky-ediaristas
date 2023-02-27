import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';

import RoundedButton from '@/components/inputs/RoundedButton/RoundedButton';
import Link from '@/components/navigation/link/Link';

import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from './Header.styled';

const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return <HeaderMobile />;
};

export default Header;

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
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton edge={'start'} color={'inherit'}>
          <i className="twf-bars" />
        </IconButton>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="logo e-diaristas" />
        </Link>
      </Toolbar>
      <HeaderDrawer open={false}>
        <MenuList>
          <Link href="/" Component={MenuItem}>
            Login
          </Link>
          <Divider />
          <Link href="/" Component={MenuItem}>
            Seja um(a) Diarista
          </Link>
        </MenuList>
      </HeaderDrawer>
    </HeaderAppBar>
  );
};
