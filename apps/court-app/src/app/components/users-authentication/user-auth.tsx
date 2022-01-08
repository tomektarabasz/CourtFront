import React from 'react';
import { Login } from './login';
import { SignIn } from './signin';
import styled from 'styled-components';

const UserAuthWrapper = styled.div`
  display: flex;
  column-gap: 2em;
  padding: 2em;
`;

export const UserAuth: React.FC = () => (
  <UserAuthWrapper>
    <SignIn />
    <Login />
  </UserAuthWrapper>
);
