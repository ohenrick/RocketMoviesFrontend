import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Background } from './styles';
// import { Link } from 'react-router-dom';

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}/>

        <Button title="Entrar"/>

        {/* <Link to="/register"> */}
        <a href="#">Criar conta</a>
        {/* </Link> */}
      </Form> 

      <Background />
    </Container>
  )
}