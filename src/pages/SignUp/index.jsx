import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        
        <div className='InputR1'>
        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}/>
        </div>
        <div className='InputR2'>
        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>
        </div>
        <div className='InputR3'>
        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}/>
        </div>

        <Button title="Cadastrar"/>

        <Link to="/">
          <FiArrowLeft /> Voltar para o login
        </Link>  
      </Form> 

      <Background />
    </Container>
  )
}