import React from 'react';

import { Container } from './styles';

export interface PackProps {
  id: string;
  price: number;
  qty_questions: number;
  description?: string;
  type?: 'text';
  user_id: string
}

const bgs = ['flowers', 'river', 'record', 'fence'];
const bg = bgs.sort(() => Math.random() - 0.5);

const Pack: React.FC<PackProps> = ({ id, price, qty_questions, description, type, user_id }) => {

  const formatedPrice = `R$ ${price},00`;

  return (
    <Container>
      <div className="card">
        <div key={id} className={`card__image card__image--${bg[0]}`} />
        <div className="card__content">
          <div className="card__title">
            {description}
          </div>
          <p className="card__text">
            {formatedPrice}
            <br />
            {qty_questions} perguntas
          </p>

          <button className="btn btn--block card__btn" onClick={event =>  window.open(`${process.env.REACT_APP_NODEJS_API_URL}/payments?id=${id}&user_id=${user_id}&questions=${qty_questions}`, '_blank')}>Comprar</button>

        </div>
      </div>
    </Container>
  );
};

export default Pack;
