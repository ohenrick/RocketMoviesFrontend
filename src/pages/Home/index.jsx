import { FiPlus } from 'react-icons/fi';
import { Container, Content, HeaderPage, Section, NewMovie } from './styles';
// import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
// import { Section } from '../../components/Section';
import { MoviesNote } from '../../components/MoviesNote';



export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                <HeaderPage>
                <Title title='Meus filmes'/>
                {/* <Link to="/new"> */}
                  {/* <Button title='Adicionar filme' icon={FiPlus} /> */}
                  <NewMovie>
                    <FiPlus />
                    Adicionar filme
                  </NewMovie>
                {/* </Link> */}
              </HeaderPage>
               <Section>
                  <MoviesNote data={{
                    title: 'Interestellar',
                    tags: [
                      {id: '1', name: 'Ficção Científica'},
                      {id: '2', name: 'Drama'},
                      {id: '3', name: 'Familia'}
                    ]
                }}/>

                  <MoviesNote data={{
                    title: 'Interestellar',
                    tags: [
                      { id: '1', name: 'Ficção Científica' },
                      { id: '2', name: 'Drama' },
                      { id: '3', name: 'Familia' }
                    ]
                }}/>
                
                <MoviesNote data={{
                    title: 'Interestellar',
                    tags: [
                      { id: '1', name: 'Ficção Científica' },
                      { id: '2', name: 'Drama' },
                      { id: '3', name: 'Familia' }
                    ]
                }}/>
                </Section>
               
          
            </Content>
            </main>
        </Container>
    );
}