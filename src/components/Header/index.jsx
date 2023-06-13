import { Container, Profile } from "./styles";
import { Input } from '../Input/index'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título' />

      <Profile to="/profile">
        <div>
          <strong>Henrique Santos</strong>
          <a href="/"><span>sair</span></a>
        </div>

        <img src="https://github.com/ohenrick.png" alt="Foto do Usuário" />
      </Profile>

    </Container>
  );
}