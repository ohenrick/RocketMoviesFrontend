import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";

import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <section>
          <Form>

            <header>
              <Link to="/">
                <ButtonText href="/" title="Voltar" icon={FiArrowLeft}/>
              </Link>
              <Title title="Novo filme"/>
            </header>


            <div className='Input_top'>
              <Input placeholder="Título"/>
              <Input type="number" min="0" max="5" placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <TextArea placeholder="Observações"/>

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
  )
};