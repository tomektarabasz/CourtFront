import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Background } from '../pages/home.styled';
import { Logo } from './logo';
import logo from '../../logo.jpeg';
import { UserAuth } from './users-authentication/user-auth';

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Shadow = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) ;
  );
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin: -80vh auto;
  justify-content: center;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Background>
          <Shadow>
            <Logo>
              <NavLink to={'/'}>
                <img src={logo} alt={'logo'} />
              </NavLink>
            </Logo>
            <UserAuth />
          </Shadow>
        </Background>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
};
