import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logo, ToProfile } from "./styles";
import { Input } from '../Input/index'

export function Header({ onSearch }) {
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate()

  function handleToHome() {
    navigate("/")
  }

  return (
    <Container>
      <Logo onClick={handleToHome}>
      RocketMovies
      </Logo>

      <Input
      onClick={handleToHome} 
      placeholder='Pesquisar pelo título'
      onChange={(e) => setSearch(e.target.value)}
      />

      <Profile>
      <div>
        <ToProfile to="/profile">
          <strong>{user.name}</strong>
        </ToProfile>
        <a onClick={signOut}><span>sair</span></a>
      </div>
      <ToProfile to="/profile">
        <img src={avatarUrl} alt={user.name} />
      </ToProfile>
      </Profile> 
    </Container>
  );
}