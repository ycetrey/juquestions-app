import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackgroundImg from '../../assets/sign-up-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: block;
  align-items: stretch;

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  @media screen and (min-width: 1000px) {
    max-width: 700px;
  }
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  max-width: auto;

  flex: auto;
  flex-grow: 1;
  min-height: 0;

  animation: ${apperFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#312e38')};
      }
    }
  }
  > a {
    color: #312e38;
    display: flex;
    align-items: center;
    margin: 24px 0;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signUpBackgroundImg}) no-repeat center bottom;
  background-size: cover;

  display: none;

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
