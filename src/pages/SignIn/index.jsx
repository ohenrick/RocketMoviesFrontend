import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <div className='InputL1'>
        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>
        </div>
        <div className='InputL2'>

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}/>
        </div>
        <Button title="Entrar"/>

        <Link to="/register">
          Criar conta
        </Link>
      </Form> 

      <Background />
    </Container>
  )
}