import React from 'react';
import styled from 'styled-components';
import { Background } from '../pages/Home/Home.styled';
import { Logo } from './logo';
import logo from '../../logo.jpeg';

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
    rgba(255, 255, 255, 1)
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: -80vh auto;
  justify-content: center;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <Background>
        <Shadow>
          <Logo>
            <img src={logo} alt={'logo'} />
          </Logo>
        </Shadow>
      </Background>
      <ContentWrapper>{children}</ContentWrapper>
    </MainWrapper>
  );
};
