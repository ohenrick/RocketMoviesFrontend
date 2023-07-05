import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { MoviesNote } from '../../components/MoviesNote';
import { Input } from '../../components/Input';
import { Search } from "../../components/Header/styles";

import { Container, Content, HeaderPage, Section, NewMovie } from './styles';



export function Home() {
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  async function fetchNotes(search = '') {
    const response = await api.get(`/notes?title=${search}`);
    setNotes(response.data);
  }

  async function fetchTags(){
    const response = await api.get("/tags");
    setTags(response.data);
  }

  useEffect(() =>{
    fetchTags();
  }, [] );

  useEffect(() => {
    fetchNotes();
  }, [search]);

    return (
        <Container>
            <Header>
                <Search>
                    <Input
                        placeholder="Pesquisar pelo título"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Search>
            </Header>
            <main>
                <Content>
                <HeaderPage>
                <Title title='Meus filmes'/>
                
                  <NewMovie to="/new">
                    <FiPlus />
                    Adicionar filme
                  </NewMovie>
                
              </HeaderPage>
               <Section>
                  {
                    notes && notes.map(note => (
                      <MoviesNote 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                      />
                    ))
                  }
                </Section>  
            </Content>
            </main>
        </Container>
    );
}