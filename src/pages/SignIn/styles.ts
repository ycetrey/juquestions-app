import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  display: flex;
  grid-template-areas: 'background'
                      'content';

  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  align-items: stretch;
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-areas: 'content background';
    grid-template-columns: 50%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-area: content;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px 0;
`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  animation: ${apperFromLeft} 1s;

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
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
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
  grid-area: background;
  flex: 1;

  background: url(${signInBackgroundImg}) no-repeat center bottom;
  background-size: cover;

  display: none;

  @media screen and (min-width: 1000px) {
    display: grid;
  }
`;
