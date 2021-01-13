import styled from 'styled-components';

export const Container = styled.div``;

export const Questions = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 50px auto 0 auto;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #eee;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #999591;
    }

    strong {
      color: #999;
    }
  }
`;

export const Wrapper = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

`;

export const Packs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 40px;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 20px 0;
  padding-left: 16px;
  flex: 1fr;
`;

export const Welcome = styled.div``;

export const Promotions = styled.div``;

export const PackContainer = styled.div``;

export const Footer = styled.div`
  margin: 200px 0;
  width: 100%;
  border: 1px solid red;
`;
