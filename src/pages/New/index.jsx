import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { Title } from '../../components/Title';
import { Link } from 'react-router-dom';


import { Container, Form, } from "./styles"

export function New() {
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
              <Input placeholder="Título" />
              <Input type="number" min="0" max="5" placeholder="Sua nota (de 0 a 5)" />
            </div>

            <Textarea placeholder="Observações" />
            
            <div className="Tags">
                <span>Marcadores</span>

                <div className="Moviesection">
                  <MovieItem value="Ficção Científica"/>
                  <MovieItem value="Drama"/>
                  <MovieItem value="Família"/>
                  <MovieItem isNew value="Novo Marcador"/>
                </div>
              </div>

              <div className="button-line">
                <Button isActive={false} title="Excluir Filme"/>
                <Button title="Salvar alterações"/>
              </div>

          </Form>

        </section>

      </main>
    </Container>
  );
}