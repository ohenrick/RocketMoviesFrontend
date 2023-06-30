import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { MoviesNote } from '../../components/MoviesNote';

import { Container, Content, HeaderPage, Section, NewMovie } from './styles';



export function Home() {
  const [notes, setNotes] = useState([]);
  
  const navigate = useNavigate();

  async function fetchNotes(searchTitle = '') {
    const response = await api.get(`/notes?title=${searchTitle}`);
    setNotes(response.data);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
        fetchNotes();
  }, []);

    return (
        <Container>
            <Header onSearch={fetchNotes}/>
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