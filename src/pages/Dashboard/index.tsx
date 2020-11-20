import React, { useState, useEffect } from 'react';
import { FiPower } from 'react-icons/fi';

import {
  Container,
  Questions,
  Header,
  HeaderContent,
  Profile,
  Welcome,
  Promotions,
  Wrapper,
  Packs,
  Title,
  Footer,
} from './styles';

import logoImg from '../../assets/logo.jpg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { PackProps } from '../../components/Pack';

import Pack from '../../components/Pack';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [packs, setPacks] = useState<PackProps[]>([]);

  const token = localStorage.getItem('@JuQuestions:token');

  useEffect(() => {
    api
      .get('/packs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setPacks(response.data);
      });
  }, [token]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Ju" width="100" />
          <Profile>
            <img
              src={
                user.photo !== 'string'
                  ? user.photo
                  : 'https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png'
              }
              alt={user.first_name}
              width="100"
            />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.first_name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>
      <Wrapper>
        <Welcome />
        <Promotions />
        <Packs>
          <Title> Confira nossos pacotes</Title>
          {packs.map(pack => (
            <Pack
              user_id={user.id}
              key={pack.id}
              id={pack.id}
              price={pack.price}
              qty_questions={pack.qty_questions}
              description={pack.description}
            />
          ))}
        </Packs>
      </Wrapper>
      <Wrapper>
        <Questions>
          <Title> Faça suas perguntas</Title>
        </Questions>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Dashboard;
