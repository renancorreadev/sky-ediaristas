import type { ButtonProps, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import Router from 'next/router';
import type { ElementType, PropsWithChildren } from 'react';
import React from 'react';

interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  nextLink?: NextLinkProps;
  Component?: ElementType;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  nextLink,
  mui,
  Component = MuiLink,
  ...props
}) => {
  const isNextEnv = Boolean(Router.router);

  return isNextEnv ? (
    <NextLink href={href} passHref {...nextLink}>
      <Component {...mui}>{children}</Component>
    </NextLink>
  ) : (
    <Component href={href} {...mui} {...props}>
      {children}
    </Component>
  );
};

export default Link;
