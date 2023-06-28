import { Container, Profile, ToProfile } from "./styles";
import { Input } from '../Input/index'
import { useAuth } from "../../hooks/auth";
import { Link } from 'react-router-dom'

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título' />

      <Profile>
      <div>
        <ToProfile to="/profile">
          <strong>Henrique Santos</strong>
        </ToProfile>
        <a onClick={signOut}><span>sair</span></a>
      </div>
      <ToProfile to="/profile">
        <img src="https://github.com/ohenrick.png" alt="Foto do Usuário" />
      </ToProfile>
      </Profile>
    </Container>
  );
}