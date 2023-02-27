import { useIsMobile } from '@/hooks/useIsMobile';

import { HeaderDesktop } from './desktop';
import { HeaderMobile } from './mobile';

const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const isMobile = useIsMobile();

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
