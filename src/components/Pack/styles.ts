import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover {
      .card__image {
        filter: contrast(100%);
      }
    }
  }

  .card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }

  .card__image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    &::before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }
    @media (min-width: 40rem) {
      &::before {
        padding-top: 66.6%;
      }
    }
  }

  .card__image--flowers {
    background-image: url(https://unsplash.it/800/600?image=82);
  }

  .card__image--river {
    background-image: url(https://unsplash.it/800/600?image=11);
  }

  .card__image--record {
    background-image: url(https://unsplash.it/800/600?image=39);
  }

  .card__image--fence {
    background-image: url(https://unsplash.it/800/600?image=59);
  }

  .card__title {
    color: #333;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .card__btn {
    background: #28a745;
    border-color: #28a745;
    border: 1px solid transparent;
    padding: 10px 0;
  }

  .card__text {
    padding-top: 25px;
    text-align: center;
    color: #333;
    flex: 1 1 auto;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
`;
