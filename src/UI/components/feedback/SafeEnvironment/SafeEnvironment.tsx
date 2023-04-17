import { Container } from '@mui/material';
import React from 'react';

import { SafeEnvironmentContainer } from './SafeEnvironment.styled';

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% seguro <i className="twf-lock" />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
