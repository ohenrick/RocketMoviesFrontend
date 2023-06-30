import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { Title } from '../../components/Title';

import { api } from '../../services/api';

import { Container, Form } from "./styles"

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    
    if(!title) {
      return alert("Digite o título do Filme.");
    }

    if(!rating) {
      return alert("Você esqueceu de adicionar uma nota ao Filme.");
    }
    
    if(newTag) {
      return alert("Você esqueceu de adicionar o marcador.");
    }
    
    await api.post("/notes", {title, description, tags, rating});

    alert("Novo filme adicionado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>

        <section>
          <Form>
      
            <header>
            <Link to="/">
              <ButtonText title='Voltar' icon={FiArrowLeft} />
            </Link>
            <Title title="Novo filme"/>
            </header>
            <div className='InputC1'>
              <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
              <Input type="number" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
            </div>

            <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
            
            <div className="Tags">
                <span>Marcadores</span>

                <div className="Moviesection">
                  {
                    tags.map((tag, index) => (
                      <MovieItem 
                        key={String(index)} 
                        value={tag} 
                        onClick={() => handleRemoveTag(tag)}
                      />
                    ))
                  }
                  <MovieItem 
                  isNew
                  placeholder="Novo Marcador" 
                  onChange={e => setNewTag(e.target.value)} 
                  value={newTag} 
                  onClick={handleAddTag} 
                  />
                </div>
              </div>

              <div className="button-line">
                <Button isActive={false} title="Excluir Filme"/>
                <Button 
                  title="Salvar alterações"
                  onClick={handleNewNote}
                />
              </div>

          </Form>

        </section>

      </main>
    </Container>
  );
}