import { Box, List, Typography } from '@mui/material';
import React from 'react';

import Link from '@/components/navigation/link/Link';

import {
  AppList,
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterSocialList,
  FooterTitle,
  SocialButton,
  SocialContainer,
  TitleWrapper,
} from './component.styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <TitleWrapper>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                Component={'span'}
                href="/encontrar-diarista"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Encontrar um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                Component={'span'}
                href="/encontrar-diarista"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Seja um Diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                Component={'span'}
                href="/"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Porque usar o E-diaristas?
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                Component={'span'}
                href="/"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Principais Dúvidas
              </Link>
            </FooterListItem>
          </List>
        </TitleWrapper>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <SocialContainer>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/img/logos/app-store.png" alt="AppStore" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/img/logos/google-play.png" alt="GooglePlay" />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterTitle>
              <FooterSocialList>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-facebook-f" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-instagram" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-youtube" />
                  </SocialButton>
                </FooterListItem>
              </FooterSocialList>
            </FooterTitle>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};
