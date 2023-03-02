import { useIsMobile } from '@/data/hooks/useIsMobile';

import { HeaderDesktop } from './desktop';
import { HeaderMobile } from './mobile';

const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeaderMobile data-testid="header-app-bar-mobile" />
  ) : (
    <HeaderDesktop data-testid="header-app-bar" />
  );
};

export default Header;
