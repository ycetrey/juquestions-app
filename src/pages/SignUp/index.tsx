import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiEye, FiScissors, FiSmile, FiCalendar } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.jpg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, AnimationContainer } from './styles';

interface SignUpFormData {
  firstName: string;
  email: string;
  photo?: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          first_name: Yup.string().required('Primeiro nome é obrigatório.'),
          email: Yup.string().required('E-mail é obrigatório.').email('Digite um e-mail válido'),
          photo: Yup.string().default('string'),
          birth_date_pt: Yup.string().required('Data é obrigatório.'),
          eye_color: Yup.string().required('A Cor dos olhos é obrigatório.'),
          hair_color: Yup.string().required('A Cor do cabelo é obrigatório.'),
          skin_color: Yup.string().required('A Cor da pele é obrigatório.'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', { ...data, photo: 'string' });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
          description: 'Você já pode realizar o login',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img width="100" src={logoImg} alt="Ju" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="first_name" icon={FiUser} placeholder="Primeiro nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="birth_date_pt" icon={FiCalendar} placeholder="Data de aniversário" />
            <Input name="eye_color" icon={FiEye} placeholder="Cor dos olhos" />
            <Input name="hair_color" icon={FiScissors} placeholder="Cor do cabelo" />
            <Input name="skin_color" icon={FiSmile} placeholder="Cor da pele" />
            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
