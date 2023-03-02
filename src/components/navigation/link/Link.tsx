import type { ButtonProps, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import Router from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

export interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  next?: NextLinkProps;
  Component?: React.ElementType;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  next,
  mui,
  Component = MuiLink,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const isNextEnv = Boolean(Router.router);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return isNextEnv ? (
    <NextLink href={href} passHref {...next}>
      <Component {...mui} {...props}>
        {children}
      </Component>
    </NextLink>
  ) : (
    <Component href={href} {...mui} {...props}>
      {children}
    </Component>
  );
};

export default Link;
